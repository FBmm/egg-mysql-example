import { Controller } from 'egg';

export default class HomeController extends Controller {
  public async index() {
    console.log('do')
    const { ctx } = this;
    ctx.body = await ctx.service.test.query();
  }

  public async insert() {
    console.log('do')
    const { ctx } = this;
    ctx.body = await ctx.service.test.insert();
  }
}
