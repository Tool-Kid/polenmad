const { IgnorePlugin } = require('webpack');

module.exports = (webpack, context) => {
  const lazyImports = [
    '@nestjs/microservices',
    '@nestjs/microservices/microservices-module',
    '@nestjs/websockets/socket-module',
    'cache-manager'
  ];

  return {
    ...webpack,
    externals: [],
    plugins: [
      ...webpack.plugins,
      new IgnorePlugin({
        checkResource(resource) {
          if (lazyImports.includes(resource)) {
            try {
              require.resolve(resource);
            } catch (err) {
              return true;
            }
          }
          return false;
        },
      }),
    ],
  };
};
