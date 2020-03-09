import { Controller } from 'egg';
import { print } from '../util';

export default class LoginController extends Controller {
  public async login() {
    const { ctx } = this;
    print.execute('LoginController');
    ctx.body = await ctx.service.login.login();
    ctx.body = 'login';
  }

}
