global.__DEV__ = true;
// global.__PROD__ = config.env === 'production';
// global.__TEST__ = config.env === 'test';

module.exports = function(env) {
  return require(`./webpack.${env || 'dev'}.js`)
}