const path = require('path');

const {
  override,
  addDecoratorsLegacy,
  disableEsLint,
} = require('customize-cra');

const ENABLELOG = true;
const inspectOptions = { showHidden: true, depth: 12, colors: true };
const log = obj => {
  if (ENABLELOG === true) {
    console.dir(obj, inspectOptions);
  }
};

const findPlugin = (plugins, pluginName) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

const enableTSLintWithForkTsCheckerWebpackPlugin = () => config => {
  const plugin = findPlugin(config.plugins, 'ForkTsCheckerWebpackPlugin');
  plugin.tslint = path.resolve('tslint.json');
  log(plugin);

  return config;
};

const handleConsole = () => config => {
  // print 100 empty lines to console
  [...Array(100)].forEach(() => {
    console.log();
  });

  return config;
};

module.exports = override(
  addDecoratorsLegacy(),
  disableEsLint(),
  enableTSLintWithForkTsCheckerWebpackPlugin(),
  handleConsole()
);
