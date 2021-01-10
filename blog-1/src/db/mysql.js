const mysql = require('mysql')
const { MYSQL_CONF } = require('../conf/db') // MYSQL_CONF是nodejs采用的配置

// 创建连接对象
const con = mysql.createConnection(MYSQL_CONF)

// 开始连接
con.connect()

// 执行 sql 的函数
function exec(sql) {
    const promise = new Promise((resolve, reject) => {
        con.query(sql, (err, result) => {
            if (err) {
                reject(err);
                return
            }
            resolve(result);
        })
    })
    return promise
}

// con.end() // 不结束连接，保持连接状态，不让它关闭

module.exports = {//返回 exec 这个函数
    exec
}