/*
    @TODO
    express.js를 사용해 서버를 구성하라.
*/
const express = require("express");  // express 모듈을 import
const app = express();  // express 초기화
const port = 3000;  // 서버 포트번호

app.get("/", function(req, res) {
    res.send("Hello World, I'm express.js server!");
});

app.listen(port, function() {
    console.log("Example app listening on port "+ port +"!");
});
