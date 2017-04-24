'use strict';

module.exports = appInfo => {
  const config = {};

  // should change to your own
  config.keys = appInfo.name + '_1493003201288_4485';
  config.view = {
    defaultViewEngine: 'ejs',
    defaultExtension: '.ejs',
    cache: true
  };

  return config;
};
