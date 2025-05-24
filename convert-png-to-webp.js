// Script para convertir todos los PNG en /public a WebP usando sharp
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

fs.readdirSync(publicDir)
  .filter(file => file.endsWith('.png'))
  .forEach(file => {
    const fullPath = path.join(publicDir, file);
    const output = path.join(publicDir, file.replace(/\.png$/, '.webp'));
    sharp(fullPath)
      .webp({ quality: 80 })
      .toFile(output)
      .then(() => console.log(`Convertido: ${file} → ${path.basename(output)}`))
      .catch(err => console.error(`Error al convertir ${file}:`, err));
  });
