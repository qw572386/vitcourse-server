class result {
    success(data, msg = '成功', code = 0) {
        return {
            code,
            msg,
            data
        }
    }
    failed(msg = '失败', code = 1) {
        return {
            code,
            msg
        }
    }
}
module.exports = new result()
