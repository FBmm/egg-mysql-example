import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/', controller.home.index);
  router.get('/login', controller.login.login);
  router.get('/find', controller.home.index);
  router.get('/insert', controller.home.insert);
};
