module.exports = function(config) {
  configuration = {
    basePath: '',
    frameworks: ['jasmine', 'requirejs', 'es6-shim'],
    customLaunchers: {
      travis_ci: {
        base: 'PhantomJS',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['PhantomJS'],
    reporters: ['progress'],
    files: [
      {pattern: 'src/__tests__/*.ts', included: false},
      'src/__tests__/test-main.js'
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
    configuration.browsers = ['travis_ci'];
  }
  config.set(configuration);
};
