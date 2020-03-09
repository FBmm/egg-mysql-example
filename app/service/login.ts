import { Service } from '../core/service';

export default class LoginService extends Service {
    async queryUserById(id: string) {
        console.log(this.print.execute('LoginService'));
        return await this.app.mysql.get('user', { id: id });
    }
}
