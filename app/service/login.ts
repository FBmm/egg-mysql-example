import { Service } from '../core/service';

export default class LoginService extends Service {
    async login() {
        console.log(this.print.execute('LoginService'));
        return
    }
}
