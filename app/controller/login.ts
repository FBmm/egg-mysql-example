import { Controller } from 'egg';
import { print } from '../util';

export default class LoginController extends Controller {
  public async login() {
    print.execute('LoginController');
    const { ctx } = this;
    // 获取 http Request  body 参数
    const { id } = ctx.request.body;
    if (!id) {
      ctx.body = {
        code: 10001,
        result: {
          exception: '参数错误',
          description: 'id is empty',
          suggestion: ''
        },
        data: {},
      }
      return;
    }
    // 查询用户信息
    const user = await ctx.service.login.queryUserById(id);
    console.log(user);
    if (user) {
      ctx.body = {
        code: 0,
        result: {
          exception: '',
          description: '',
          suggestion: ''
        },
        data: user,
      }
    } else {
      ctx.body = {
        code: 10000,
        result: {
          exception: '查询用户失败',
          description: '',
          suggestion: ''
        },
        data: {},
      }
    }
  }
}
