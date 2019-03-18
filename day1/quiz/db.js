/**
 * @TODO
 * 1) 작성된 test 테이블의 내용을 출력해 본다.
 * 2) 웹 서버를 설정하고, "/list" 라우팅이 된 경우, test 테이블의 데이터를 응답으로 출력한다.
 */

var sqlite3 = require("sqlite3").verbose();
var db = new sqlite3.Database("./WebApps2.db");
 
db.serialize(function () {
    // test 테이블에 데이터를 추가한다.
    // db.run('CREATE TABLE "test" ("id" INTEGER PRIMARY KEY AUTOINCREMENT, "nickname" TEXT)');

	db.run('INSERT INTO test (nickname) VALUES (?)', "Hyodae", function() {
	    console.log("inserted!");
    });

    // test 테이블의 데이터를 출력한다.
    db.each("SELECT * FROM test", function (err, row) {
        console.log(row);
    });
});

db.close();


