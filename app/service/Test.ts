import { Service } from 'egg';

/**
 * Test Service
 */
export default class Test extends Service {

  public async query() {
    console.log('do service')
    return await this.app.mysql.query('select * from user where id = ?', 1);
  }

  public async insert() {
    console.log('do service')
    const id = Math.random();
    console.log(id);
    return await this.app.mysql.query('insert into user values (?, ?)', [id, 'wqqq']);
  }
}
