const mysql = require('mysql') 

// 创建连接对象
const con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: '3306',
    database: 'myblog' //使用数据库
})

// 开始连接
con.connect()

// 执行 sql 语句
// const sql = 'select id, username from users' //查询
// const sql = `update users set realname='李四2' where username='lisi';`
const sql = `insert into blogs(title, content, createtime, author) values('标题C','内容C',1609918767349,'zhangsan');`
con.query(sql, (err, result) => {
    if (err) {
        console.error(err);
        return
    }
    console.log(result);
})

// 关闭连接
con.end()