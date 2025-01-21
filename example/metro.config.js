const path = require('path');
const { getDefaultConfig } = require('@expo/metro-config');
const { getConfig } = require('react-native-builder-bob/metro-config');
const pkg = require('../package.json');

const root = path.resolve(__dirname, '..');
const libraryPath = path.resolve(root, 'src');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
module.exports = getConfig(
  {
    ...getDefaultConfig(__dirname),
    resolver: {
      ...getDefaultConfig(__dirname).resolver,
      extraNodeModules: {
        [pkg.name]: libraryPath, // Ensure the library is resolved correctly
      },
    },
    watchFolders: [
      root, // Watch the root folder
      libraryPath, // Watch the library folder
    ],
  },
  {
    root,
    pkg,
    project: __dirname,
  }
);
