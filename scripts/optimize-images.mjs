import sharp from "sharp";
import { readdir, stat } from "fs/promises";
import { join, extname, basename } from "path";

const PUBLIC_DIR = new URL("../public", import.meta.url).pathname.replace(/^\/([A-Z]:)/, "$1");

const CONFIGS = {
  // Foto de perfil: mostrada a 128–176px, 352px para retina 2×
  "photo.png": { width: 352, quality: 85 },

  // Screenshots de proyectos: tarjeta col-span-2 → ~576px, 1200px para retina
  "proyecto-cad.png":   { width: 1200, quality: 80 },
  "flujon8n.png":       { width: 1200, quality: 80 },
  "proyecto-suma.png":  { width: 1200, quality: 80 },
  "proyecto-suma-2.png":{ width: 1200, quality: 80 },
  "proyecto-suma-3.png":{ width: 1200, quality: 80 },

  // Logos de empresa: mostrados a 48–56px, 112px para retina
  "logoosiptel.png":    { width: 112, quality: 90 },
  "logoutp.png":        { width: 112, quality: 90 },
};

function formatBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / 1024 / 1024).toFixed(2)} MB`;
}

async function optimizeImages() {
  console.log("🖼️  Optimizando imágenes PNG → WebP...\n");

  let totalBefore = 0;
  let totalAfter = 0;

  for (const [filename, config] of Object.entries(CONFIGS)) {
    const inputPath = join(PUBLIC_DIR, filename);
    const outputName = filename.replace(".png", ".webp");
    const outputPath = join(PUBLIC_DIR, outputName);

    try {
      const before = (await stat(inputPath)).size;
      totalBefore += before;

      await sharp(inputPath)
        .resize(config.width, null, {
          withoutEnlargement: true,
          fit: "inside",
        })
        .webp({ quality: config.quality })
        .toFile(outputPath);

      const after = (await stat(outputPath)).size;
      totalAfter += after;

      const reduction = (((before - after) / before) * 100).toFixed(1);
      console.log(
        `  ✅  ${filename.padEnd(22)} ${formatBytes(before).padStart(8)} → ${formatBytes(after).padStart(8)}  (${reduction}% menos)`
      );
    } catch (err) {
      console.error(`  ❌  Error en ${filename}: ${err.message}`);
    }
  }

  console.log(`\n  Total antes:  ${formatBytes(totalBefore)}`);
  console.log(`  Total después: ${formatBytes(totalAfter)}`);
  console.log(`  Ahorro total:  ${formatBytes(totalBefore - totalAfter)} (${(((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1)}% de reducción)\n`);
}

optimizeImages();
