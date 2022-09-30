const webpack = require('webpack');

console.log('@@@@@@@@@@@@@@@@@@@@@@@');
console.log('@ using react-rewired @');
console.log('@@@@@@@@@@@@@@@@@@@@@@@');

module.exports = function override(config, env) {
  // console.dir(config.entry);

  // config.entry = config.entry.replace(new RegExp('index.tsx$'), 'logic\\index.tsx');
  // console.log('entry point changed:', config.entry);

  config.resolve.fallback = {
    url: require.resolve('url'),
    assert: require.resolve('assert'),
    crypto: require.resolve('crypto-browserify'),
    buffer: require.resolve('buffer'),
    stream: require.resolve('stream-browserify'),
    process: require.resolve('process'),
    events: require.resolve('events'),
    // fs: require.resolve('fs'),
    // http: require.resolve('stream-http'),
    // https: require.resolve('https-browserify'),
    // os: require.resolve('os-browserify/browser'),
  };
  config.plugins.push(
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  );

  return config;
};
