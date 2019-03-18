var express = require("express")
var serveIndex = require("serve-index");
var bodyParser = require("body-parser");

var app = express();
var port = 3000;
var path = __dirname + "/";


// @TODO
// 1) GET method에 응답하는 '/data' API를 만들고, 전달된 파라미터를 출력하라.
// 2) POST/GET method에 응답하는 '/cors' API를 만들고 method 종류와 각각의 method들로부터 전송된 파라미터를 출력하라.
//    --> method 구분은 콜백 함수에 전달되는 request.method 속성을 통해 알아올 수 있다.
// 3) cors 패키지를 이용해 기존의 '/cors'를 '/cors2'로 패키지를 활용하도록 변경하라.
//    --> cors를 테스트 하기 위해, 로컬 컴퓨터의 hosts 파일에 아래의 설정을 추가한다.
//        127.0.0.1 testapi.com
//        파일위치:
//        macOS : /private/etc/hosts
//        win: /Windows/system32/drivers/etc/hosts

// POST 데이터 처리
app.use(bodyParser.urlencoded({ extended: true }));  // ?param=value&param=value... 처리를 위해
app.use(bodyParser.json()); // 전달된 데이터를 JSON 형식으로 파싱

// 디렉토리 목록 출력
app.use("/", express.static(path), serveIndex(path, {
	icons: true,
	view: "details"
}));

// listening
var server = app.listen(port, function() {
	console.log("Listening on port "+ port +"!");
});

process.on("SIGINT", function() {
	server.close(function () {
		console.log( "Server closed!!!");

		// Close db connections
		db.close();
	});
});
