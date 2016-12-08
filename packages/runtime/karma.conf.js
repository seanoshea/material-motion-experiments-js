module.exports = function(config) {
  configuration = {
    basePath: '',
    frameworks: ['es6-shim', 'jasmine', 'requirejs'],
    customLaunchers: {
      Firefox_travis_ci: {
        base: 'PhantomJS',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    files: [
      '**/src/**/__tests__/**',
    ],
    plugins: [
      'karma-es6-shim',
      'karma-jasmine',
      'karma-requirejs',
      'karma-phantomjs-launcher'
    ],
    exclude: [
      '**/*.map',
    ],
    preprocessors: {
      '**/*.ts': ['webpack'],
      '**/*.js': ['webpack'],
    },
    webpack: {
      devtool: 'eval',
      resolve: {
        extensions: ['.js', '.ts'],
      },
      module: {
        loaders: [
          {
            test: /\.tsx?$/, loader: 'ts-loader?transpileOnly=true',
          },
        ],
      },
    },
    mime: {
      'text/x-typescript': ['ts', 'tsx'],
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    singleRun: false,
    concurrency: Infinity,
  };
  if (process.env.TRAVIS) {
    configuration.browsers = ['Firefox_travis_ci'];
  }
  config.set(configuration);
};
