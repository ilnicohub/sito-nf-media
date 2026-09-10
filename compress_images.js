const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const dir = path.join(__dirname, 'public/blog');
const files = fs.readdirSync(dir);

async function processImages() {
  for (const file of files) {
    if (!file.match(/\.(webp|jpg|jpeg|png)$/i)) continue;
    const filePath = path.join(dir, file);
    const stats = fs.statSync(filePath);
    
    // Only compress if larger than 200KB
    if (stats.size > 200 * 1024) {
      console.log(`Compressing ${file} (${(stats.size / 1024).toFixed(1)} KB)...`);
      const tempPath = path.join(dir, 'temp_' + file);
      
      try {
        await sharp(filePath)
          .webp({ quality: 75, effort: 6 }) // high effort, 75 quality is usually visually lossless for web
          .toFile(tempPath);
        
        fs.renameSync(tempPath, filePath);
        const newStats = fs.statSync(filePath);
        console.log(` -> Done: ${(newStats.size / 1024).toFixed(1)} KB`);
      } catch (err) {
        console.error(`Error processing ${file}:`, err);
      }
    }
  }
}

processImages();
