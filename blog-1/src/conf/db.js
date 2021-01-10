// conf文件夹用来存储存储配置

// 获取环境变量
const env = process.env.NODE_ENV  // 环境参数，process是nodejs进程的一些信息

let MYSQL_CONF 

if(env === 'dev') { // 开发环境下
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
}

if(env === 'production') { // 生产环境下
    MYSQL_CONF = {
        host: 'localhost',
        user: 'root',
        password: 'root',
        port: '3306',
        database: 'myblog'
    }
}

module.exports = {
    MYSQL_CONF
}