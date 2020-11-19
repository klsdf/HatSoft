//本地服务器
const express = require('express')
const app = express()
const port = 3000


app.get('/', (request, response) => {
	response.setHeader('Access-Control-Allow-Origin', '*')
	response.send("数据收到")

})

app.listen(port, () => console.log(`${port} 已启动！`))