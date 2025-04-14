#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const LOCALES_DIR = path.join(__dirname, '../src/locales');

// Process each locale file
async function processLocaleFiles() {
  try {
    const files = fs.readdirSync(LOCALES_DIR);
    const localeFiles = files.filter(file => file.endsWith('.ts'));

    console.log('Found locale files:', localeFiles);

    for (const file of localeFiles) {
      const filePath = path.join(LOCALES_DIR, file);
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract all key-value pairs
      const keyValuePairs = extractKeyValuePairs(content);
      
      // Sort keys alphabetically
      keyValuePairs.sort((a, b) => a.key.localeCompare(b.key));
      
      // Generate new content with sorted keys
      let newContent = '';
      
      // Add imports for en.ts
      if (file === 'en.ts') {
        newContent += 'import { Translations } from \'../context/LocaleProvider\'\n\n';
        newContent += 'export const dict: Translations = {\n';
      } else {
        newContent += 'export const dict = {\n';
      }
      
      // Add entries to new content
      keyValuePairs.forEach((entry, index) => {
        const isLast = index === keyValuePairs.length - 1;
        newContent += `  ${entry.key}: ${entry.value}`;
        newContent += isLast ? '\n' : ',\n';
      });
      
      // Close the dictionary
      newContent += '}\n';
      
      // Write the sorted content back to the file
      fs.writeFileSync(filePath, newContent);
      console.log(`✅ Sorted ${file} successfully`);
    }
    
    console.log('✨ All locale files processed successfully!');
  } catch (error) {
    console.error('Error processing locale files:', error);
    process.exit(1);
  }
}

// Extract key-value pairs from the locale file content
function extractKeyValuePairs(content) {
  const keyValuePairs = [];
  const lines = content.split('\n');
  
  // Find where the dictionary starts
  let dictStartIndex = -1;
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('export const dict')) {
      dictStartIndex = i;
      break;
    }
  }
  
  if (dictStartIndex === -1) {
    throw new Error('Could not find dictionary in file');
  }
  
  // Find each key in the dictionary
  const keyRegex = /^\s*([a-zA-Z0-9_]+):/;
  
  for (let i = dictStartIndex + 1; i < lines.length; i++) {
    const line = lines[i];
    
    // Skip empty lines
    if (!line.trim()) continue;
    
    // Check if we've reached the end of the dictionary
    if (line.trim() === '}') break;
    
    const keyMatch = line.match(keyRegex);
    if (keyMatch) {
      const key = keyMatch[1];
      
      // Now extract the value, which may span multiple lines
      let value = line.substring(line.indexOf(':') + 1).trim();
      let j = i + 1;
      
      // Special handling for template functions
      if (key.endsWith('_template') && value.startsWith('(') && !value.endsWith(',')) {
        // Keep reading lines until we find a line ending with `,` or `}`
        while (j < lines.length && !lines[j].trim().endsWith(',') && !lines[j].trim().endsWith('}')) {
          value += ' ' + lines[j].trim();
          j++;
        }
        
        // Include the final line with the comma
        if (j < lines.length) {
          value += ' ' + lines[j].trim();
          i = j; // Update outer loop counter
        }
      } 
      // Special handling for multi-line strings
      else if (value.includes('`') && !value.endsWith(',') && !value.endsWith('`,')) {
        // Keep reading lines until we find a line ending with `,` or `}`
        while (j < lines.length && !lines[j].trim().endsWith(',') && !lines[j].trim().endsWith('`,') && !lines[j].trim().endsWith('}')) {
          value += '\n    ' + lines[j];
          j++;
        }
        
        // Include the final line with the comma
        if (j < lines.length) {
          value += '\n    ' + lines[j];
          i = j; // Update outer loop counter
        }
      }
      
      // Store the key-value pair
      keyValuePairs.push({ key, value });
    }
  }
  
  return keyValuePairs;
}

// Run the main function
processLocaleFiles();