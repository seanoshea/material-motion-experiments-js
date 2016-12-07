module.exports = function(config) {
  configuration = {
    basePath: '',
    frameworks: ['mocha'],
    customLaunchers: {
      Chrome_travis_ci: {
        base: 'Chrome',
        flags: ['--no-sandbox']
      }
    },
    browsers: ['Chrome', 'ChromeCanary', 'Safari', 'Firefox'],
    junitReporter: {
      outputFile: '../test-results.xml'
    },
    reporters: ['junit', 'dots'],
    files: [
      '**/src/**/__tests__/**',
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
    configuration.browsers = ['Chrome_travis_ci'];
  }
  config.set(configuration);
};
