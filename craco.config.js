const path = require('path');
const util = require('util');
const CracoAntDesignPlugin = require('craco-antd');

const inspect = obj => util.inspect(obj, { showHidden: true, depth: null });

const findPlugin = (plugins, pluginName) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const forkTsCheckerWebpackPlugin = findPlugin(
        webpackConfig.plugins,
        'ForkTsCheckerWebpackPlugin'
      );
      forkTsCheckerWebpackPlugin.tslint = path.resolve('tslint.json');

      return webpackConfig;
    },
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
