'use strict';

module.exports = appInfo => {
    const config = {};

    // should change to your own
    config.keys = appInfo.name + '_1493003201288_4485';

    //定义使用ejs模板
    config.view = {
        defaultViewEngine: 'ejs',
        defaultExtension: '.ejs',
        cache: true
    };

    //定义静态资源映射目录 /assets/ => app/public/
    config.static = {
        prefix: '/assets/'
    };

    config.mysql = {
        // 单数据库信息配置
        client: {
            // host
            host: 'localhost',
            // 端口号
            port: '3306',
            // 用户名
            user: 'root',
            // 密码
            password: '',
            // 数据库名
            database: 'test',
        },
        // 是否加载到 app 上，默认开启
        app: true,
        // 是否加载到 agent 上，默认关闭
        agent: false,
    };
    config.multipart = {
        fileExtensions: ['.csv']
    };

    return config;
};
