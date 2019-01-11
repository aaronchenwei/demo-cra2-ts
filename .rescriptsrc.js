const { both, includes, prop, propSatisfies } = require('ramda');
const {
  editWebpackPlugin,
  getPaths,
  remove,
  resolveFromRoot,
} = require('@rescripts/utilities');

const inspectOptions = { showHidden: true, depth: 12, colors: true };
const logConfig = config => {
  console.dir(config, inspectOptions);

  return config;
};
logConfig.isMiddleware = true;

const isESLintLoader = both(
  prop('loader'),
  propSatisfies(includes('eslint-loader'), 'loader')
);
const removeBuiltInEsLintLoader = config =>
  remove(getPaths(isESLintLoader, config), config);

const editForkTsCheckerWebpackPlugin = config =>
  editWebpackPlugin(
    plugin => {
      plugin.tslint = resolveFromRoot('tslint.json');
      return plugin;
    },
    'ForkTsCheckerWebpackPlugin',
    config
  );

module.exports = [
  removeBuiltInEsLintLoader,
  editForkTsCheckerWebpackPlugin,
  // logConfig,
];
