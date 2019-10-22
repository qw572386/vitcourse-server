const mongoose = require('mongoose')
const config = require('../config')
module.exports.init = () => {
    mongoose.connect(config.dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    })
    const db = mongoose.connection;
    db.on('error', (error) => {
        console.log('数据库连接失败' + error)
    });
    db.once('open', () => {
        console.log('数据库连接成功')
    })
}
