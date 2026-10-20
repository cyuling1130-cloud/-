const fs = require('node:fs');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
const output = source.replace(/src="([^"\r\n]+\.(?:png|jpe?g))"/gi, (_, file) => {
  const mime = /\.png$/i.test(file) ? 'image/png' : 'image/jpeg';
  return `src="data:${mime};base64,${fs.readFileSync(path.join(__dirname, file)).toString('base64')}"`;
});
fs.writeFileSync(path.join(__dirname, '鄭羽玲個人網站.html'), output);
console.log('單檔網頁已更新，圖片已內嵌。');
