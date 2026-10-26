// Fix ALL unescaped single quotes in data files
const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '..', 'renderer', 'data');
const files = fs.readdirSync(dataDir).filter(f => f.endsWith('.js'));

let totalFixed = 0;

for (const file of files) {
  const filePath = path.join(dataDir, file);
  const content = fs.readFileSync(filePath, 'utf8');
  let fixCount = 0;
  
  const lines = content.split('\n');
  const fixedLines = lines.map(line => {
    // Skip lines without quotes
    if (!line.includes("'")) return line;
    
    // Match lines with string values that might have unescaped quotes
    // Pattern: key: '...' where the value contains unescaped inner single quotes
    const stringMatch = line.match(/^(\s*(?:text|explanation|question|meaning|moral|summary|label|source|author|title|categoryLabel):\s*)'(.*)'(,?\s*)$/);
    if (stringMatch) {
      const prefix = stringMatch[1];
      let inner = stringMatch[2];
      const suffix = stringMatch[3];
      
      // Check for unescaped single quotes (not preceded by \)
      if (/(?<!\\)'/.test(inner)) {
        // Escape unescaped single quotes
        inner = inner.replace(/(?<!\\)'/g, "\\'");
        fixCount++;
        return `${prefix}'${inner}'${suffix}`;
      }
    }
    
    return line;
  });
  
  if (fixCount > 0) {
    fs.writeFileSync(filePath, fixedLines.join('\n'), 'utf8');
    console.log(`[FIXED] ${file}: ${fixCount} lines`);
    totalFixed += fixCount;
  }
}

console.log(`\nTotal fixed: ${totalFixed} lines`);
