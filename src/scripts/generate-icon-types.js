#!/usr/bin/env node
// ------ Method 3: Auto-triggered version with snippet ------

const fs = require('fs');
const path = require('path');

// Get the user's project root (not the library's path)
const userProjectRoot = process.cwd();

// Path to the user's package.json file
const userPackageJsonPath = path.join(userProjectRoot, 'package.json');

// Read the user's package.json file
const userPackageJson = JSON.parse(
  fs.readFileSync(userPackageJsonPath, 'utf8')
);

// Extract paths from package.json
const jsonFilePath =
  userPackageJson['@herujest/rn-mob-common-ui']?.['icon-json-path'];
const outputTypesPath =
  userPackageJson['@herujest/rn-mob-common-ui']?.['output-types-path'];

if (!jsonFilePath) {
  console.error(
    '❌ Please provide "icon-json-path" in your package.json under "@herujest/rn-mob-common-ui".'
  );
  process.exit(1);
}

if (!outputTypesPath) {
  console.error(
    '❌ Please provide "output-types-path" in your package.json under "@herujest/rn-mob-common-ui".'
  );
  process.exit(1);
}

// Resolve paths relative to the user's project root
const resolvedJsonFilePath = path.resolve(userProjectRoot, jsonFilePath);
const resolvedTypesPath = path.resolve(userProjectRoot, outputTypesPath);

// Ensure the target directory exists
const outputDir = path.dirname(resolvedTypesPath);
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// Read the JSON file
const jsonData = JSON.parse(fs.readFileSync(resolvedJsonFilePath, 'utf8'));

// Extract icon names
const iconNames = jsonData.icons.map((icon) => icon.properties.name);

// Generate TypeScript content
const tsContent = `// This file is auto-generated. Do not edit manually.
export type IconName =
  ${iconNames.map((name) => `| '${name}'`).join('\n  ')};`;

// Write to the output TypeScript file
fs.writeFileSync(resolvedTypesPath, tsContent, 'utf8');

console.log(`✅ Icon types generated successfully at: ${resolvedTypesPath}`);

console.log(`💡 Usage: Import it in your project as follows:

import { IconName } from '${path.relative(userProjectRoot, resolvedTypesPath).replace(/\\/g, '/')}';

Or set up an alias in tsconfig.json for easier imports.
`);

console.log(' Generating Icon component for you ...');
// Define the new Icon.tsx path (user's project)
const outputIconComponentPath = path.join(resolvedTypesPath, '../Icon.tsx');

// Generate the Icon.tsx content
const iconComponentContent = `// This file is auto-generated. Do not edit manually.
import { Icon as OriginalIcon } from '@herujest/rn-mob-common-ui'; 
import type { ViewStyle } from 'react-native';
import type { IconName } from './IconTypes'; // Import generated types

interface IIconProps {
  name: IconName;
  color?: string;
  size?: number;
  strokeWidth?: number;
  offset?: number;
  style?: ViewStyle;
}

const Icon = ({
  name,
  color,
  size,
  strokeWidth,
  offset,
  style,
}: IIconProps) => {
  return (
    <OriginalIcon
      name={name}
      color={color}
      size={size}
      strokeWidth={strokeWidth}
      offset={offset}
      style={style}
    />
  );
};

export default Icon;
`;

// Write the generated Icon.tsx file
fs.writeFileSync(outputIconComponentPath, iconComponentContent, 'utf8');

console.log(
  `✅ Icon component generated successfully at: ${outputIconComponentPath}`
);
console.log(`💡 Usage: Import the new Icon component in your project as follows:

import Icon from '${path.relative(userProjectRoot, outputIconComponentPath).replace(/\\/g, '/')}';

Or set up an alias in tsconfig.json for cleaner imports.
`);

// ---- Method 2: Auto-triggered version ----
// #!/usr/bin/env node

// const fs = require('fs');
// const path = require('path');

// // Path to the user's package.json file
// const userPackageJsonPath = path.join(process.cwd(), 'package.json');

// // Read the user's package.json file
// const userPackageJson = JSON.parse(
//   fs.readFileSync(userPackageJsonPath, 'utf8')
// );

// // Extract the icon-json-path value
// const jsonFilePath =
//   userPackageJson['@herujest/rn-mob-common-ui']?.['icon-json-path'];
// if (!jsonFilePath) {
//   console.error(
//     'Please provide the "icon-json-path" in your package.json under "@herujest/rn-mob-common-ui".'
//   );
//   process.exit(1);
// }

// // Resolve the full path to the JSON file
// const resolvedJsonFilePath = path.resolve(process.cwd(), jsonFilePath);

// // Path to the output TypeScript file
// const outputFilePath = path.join(
//   __dirname,
//   '../Component/Atoms/Icon-name.types.ts'
// );

// // Read the JSON file
// const jsonData = JSON.parse(fs.readFileSync(resolvedJsonFilePath, 'utf8'));

// // Extract icon names
// const iconNames = jsonData.icons.map((icon) => icon.properties.name);

// // Generate TypeScript content
// const tsContent = `// This file is auto-generated. Do not edit manually.
// export type IconName =
//   ${iconNames.map((name) => `| '${name}'`).join('\n  ')};`;

// // Write to the output file
// fs.writeFileSync(outputFilePath, tsContent, 'utf8');

// console.log(`Icon types generated successfully at ${outputFilePath}`);

// ---------- method 1 manual triggered version ------------:
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
