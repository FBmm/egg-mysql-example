import 'egg';

declare module 'egg' {
    // Application 类型扩展
    interface Application {
        mysql: any;
    }
}