// Karma configuration
// Generated on Mon Jun 01 2015 16:27:38 GMT-0700 (Pacific Daylight Time)

module.exports = function(config) {
  'use strict';

  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [



        //
        // 3rd lib
        //
      'ufs-common/shared/external/angular/angular-1.3.16/angular.js',
      'ufs-common/shared/external/angular/angular-1.3.16/angular-mocks.js',
      'ufs-common/shared/external/angular/angular-1.3.16/angular-resource.js',
      'ufs-common/shared/external/sockjs/sockjs.js',
      'ufs-common/shared/external/stomp/stomp.js',
      'ufs-common/shared/external/jquery/jquery2.1.4/jquery.js',

      //
      // ufs-common JS and its tests
      //
      'ufs-common/shared/js/tests/unit/**/*Spec.js',
      'ufs-common/shared/js/services/*.js',
      'ufs-common/shared/js/services/**/*.js',
      'ufs-common/shared/js/directives/*.js',
      'ufs-common/shared/js/directives/**/*.js',

      //
      // ufs-time-control
      //
      'ufs-time-control/WebContent/tests/unit/**/*Spec.js',
      'ufs-time-control/WebContent/js/app/*.js',
      'ufs-time-control/WebContent/js/app/**/*.js',


      //
      // ufs-map-toc
      //
      'ufs-map-toc/WebContent/custom-assets/**/*.js',
      'ufs-map-toc/WebContent/assets/ufs-common-plugins/**/*.js',
      'ufs-map-toc/WebContent/js/tocTree.js',
      'ufs-map-toc/WebContent/js/*.js',
      'ufs-map-toc/WebContent/js/**/*.js',
      'ufs-map-toc/WebContent/tests/unit/**/*Spec.js',


      //
      // ufs-watchbox-alert
      //
      //'../ufs-watchbox-alert/WebContent/assets/js/*.js',
      //'../ufs-watchbox-alert/WebContent/js/lib/*.js',
      //'../ufs-watchbox-alert/WebContent/js/app.js',
      //'../ufs-watchbox-alert/WebContent/tests/unit/data.js',
      //'../ufs-watchbox-alert/WebContent/tests/unit/*Spec.js',
      //'../ufs-watchbox-alert/WebContent/tests/unit/**/*Spec.js'

      //
      // your projects JS and its tests
      //
    ],


    // list of files to exclude
    exclude: [
    ],


    // preprocess matching files before serving them to the browser
    // available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
    preprocessors: {
    },


    // test results reporter to use
    // possible values: 'dots', 'progress'
    // available reporters: https://npmjs.org/browse/keyword/karma-reporter
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: [
    //  'Firefox',
      'Chrome'
    ],


    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
