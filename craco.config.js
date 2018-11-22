const CracoAntDesignPlugin = require('craco-antd');

module.exports = {
  babel: {
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]],
  },
  plugins: [{ plugin: CracoAntDesignPlugin }],
};
