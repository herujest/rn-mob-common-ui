#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Path to the user's package.json file
const userPackageJsonPath = path.join(process.cwd(), 'package.json');

// Read the user's package.json file
const userPackageJson = JSON.parse(
  fs.readFileSync(userPackageJsonPath, 'utf8')
);

// Extract the icon-json-path value
const jsonFilePath =
  userPackageJson['@herujest/rn-mob-common-ui']?.['icon-json-path'];
if (!jsonFilePath) {
  console.error(
    'Please provide the "icon-json-path" in your package.json under "@herujest/rn-mob-common-ui".'
  );
  process.exit(1);
}

// Resolve the full path to the JSON file
const resolvedJsonFilePath = path.resolve(process.cwd(), jsonFilePath);

// Path to the output TypeScript file
const outputFilePath = path.join(
  __dirname,
  '../Component/Atoms/Icon-name.types.ts'
);

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync(resolvedJsonFilePath, 'utf8'));

// Extract icon names
const iconNames = jsonData.icons.map((icon) => icon.properties.name);

// Generate TypeScript content
const tsContent = `// This file is auto-generated. Do not edit manually.
export type IconName =
  ${iconNames.map((name) => `| '${name}'`).join('\n  ')};`;

// Write to the output file
fs.writeFileSync(outputFilePath, tsContent, 'utf8');

console.log(`Icon types generated successfully at ${outputFilePath}`);

// manual triggered version:
// const fs = require('fs');
// const path = require('path');

// // Path to the JSON file
// const jsonFilePath = path.join(__dirname, '../Assets/Fonts/selection.json');
// // Path to the output TypeScript file
// const outputFilePath = path.join(
//   __dirname,
//   '../Component/Atoms/Icon-name.types.ts'
// );

// // Read the JSON file
// const jsonData = JSON.parse(fs.readFileSync(jsonFilePath, 'utf8'));

// // Extract icon names
// const iconNames = jsonData.icons.map((icon) => icon.properties.name);

// // Generate TypeScript content
// const tsContent = `// This file is auto-generated. Do not edit manually.
// export type IconName =
//   ${iconNames.map((name) => `| '${name}'`).join('\n  ')};`;

// // Write to the output file
// fs.writeFileSync(outputFilePath, tsContent, 'utf8');

// console.log(`Icon types generated successfully at ${outputFilePath}`);
