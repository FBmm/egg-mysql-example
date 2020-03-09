import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/find', controller.home.index);
  router.get('/insert', controller.home.insert);
};
