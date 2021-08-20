'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/list', controller.home.getArticleList);
  router.get('/getArticleById', controller.home.getArticleById);
  router.get('/getTypeInfo', controller.home.getTypeInfo);
};

