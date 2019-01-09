const path = require('path');
const CracoAntDesignPlugin = require('craco-antd');

const inspect = obj =>
  console.dir(obj, { showHidden: true, depth: 12, colors: true });

const findPlugin = (plugins, pluginName) =>
  plugins.find(plugin => plugin.constructor.name === pluginName);

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  eslint: {
    enable: false,
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      const forkTsCheckerWebpackPlugin = findPlugin(
        webpackConfig.plugins,
        'ForkTsCheckerWebpackPlugin'
      );
      forkTsCheckerWebpackPlugin.tslint = path.resolve('tslint.json');
      // inspect(webpackConfig);

      return webpackConfig;
    },
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
