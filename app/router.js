'use strict';

module.exports = app => {
  app.get('/', 'page.index');
  app.get('/index', 'page.index');
  app.get('/upload', 'page.upload');
  app.get('/stats', 'page.stats');
  app.get('/filtration', 'page.filtration');
  app.get('/analysis', 'page.analysis');
  app.post('/api/file/upload', 'file.upload');
};
