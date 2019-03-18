"use strict";

require("core-js/modules/es7.symbol.async-iterator");

require("core-js/modules/es6.symbol");

require("core-js/modules/es6.object.set-prototype-of");

require("core-js/modules/es6.object.freeze");

require("regenerator-runtime/runtime");

require("core-js/modules/es6.promise");

require("core-js/modules/es6.function.name");

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/web.dom.iterable");

var _module = _interopRequireWildcard(require("./module"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["'K-POP'\uC740 \uC804\uC138\uACC4 \uC801\uC73C\uB85C \uD070 '\uC778\uAE30'\uB97C \uC5BB\uACE0 \uC788\uB2E4."]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _readOnlyError(name) { throw new Error("\"" + name + "\" is read-only"); }

var demo = {};
window.demo = demo;

demo.letConst = function () {
  // *** var를 let, const 선언으로 변경하라.
  var max = 5;
  var config = {
    value1: "abcd",
    value2: 3
  };

  try {
    max = (_readOnlyError("max"), 6); // 오류가 발생되어야 한다.
  } catch (e) {
    console.log("const는 다시 할당할 수 없습니다.");
  }

  for (var _x in config) {
    console.log(_x, "=>", config[_x]);
  }

  console.error(x, "<== undefined 인가?");
};

demo.defaultParam = function () {
  // *** 3개의 파라미터에 각각 다음의 값을 갖도록 구성하라.
  // ==> name은 "kildong", age는 24, hobby는 ["soccer", "music"]
  // 파라미터를 다음의 array에 포함시켜라
  function getInfo() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "kildong";
    var age = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 24;
    var hobby = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : ["soccer", "music"];
    return [name, age, hobby];
  }

  console.log(getInfo());
}; // *** Arrow function
// (5-1) 다음의 일반 함수들을 arrow function으로 변경하라


demo.arrowFunc1 = function () {
  function division(val1, val2) {
    return val1 / val2;
  }

  console.log(division(100, 2));

  var func1 = function func1() {
    return "오늘 날짜는 " + Date() + " 입니다.";
  };

  var func2 = function func2(name) {
    alert("반갑습니다!, " + name + "님~ ^^");
  };
}; // (5-2) lexical 스코프


demo.arrowFunc2 = function () {
  var handler = {
    el: document.getElementById("info"),
    init: function init() {
      var _this = this;

      this.el.querySelector("button").addEventListener("click", function (e) {
        _this.show.bind(_this)(e.type);
      }, false);
    },
    show: function show(type) {
      this.el.innerHTML = "Event " + type + " fired. Id is " + this.el.id;
    }
  };
  handler.init();
}; // (5-3) 다음의 코드를 동작하도록 수정하세요.


demo.arrowFunc3 = function () {
  var Hobby = function Hobby() {
    this.list = [];
  };

  Hobby.prototype = {
    get: function get() {
      return this.list;
    },
    add: function add(name) {
      this.list.push(name);
    },
    size: function size() {
      return this.list.length;
    }
  };
  var h = new Hobby();
  h.add("Movie");
  h.add("Music");
  console.log(h.get(), h.size()); // ["Movie", "Music"], 2 <== 출력
}; // (5-4) arguments 파라미터 값
// arrow function에서는 arguments를 사용할 수 없다.


demo.arrowFunc4 = function () {
  var _arguments = arguments;

  var sumAll = function sumAll() {
    var res = 0; // arrow function에서는 arguments를 사용할 수 없다.

    for (var i = 0; i < _arguments.length; i++) {
      res += _arguments[i];
    }

    return res;
  };

  console.log("-->", sumAll(10, 20, 30)); // 60이 출력되어야 함
}; // *** Object 표현식
// 최대한 object 표현식을 사용해 단순화 시켜 보세요.


demo.object = function () {
  var idol = ["Twice", "BTS", "Blackpink", "EXO", "Apink"];

  var singer = _defineProperty({
    idol: idol,
    get: function get() {
      return this.idol;
    }
  }, idol[1], function () {
    return "뷔, 정국, 지민, 슈가, 진, RM, 제이홉";
  });

  console.log(singer.get(), singer.BTS());
}; // *** Destructuring
// 다음을 destructuring으로 개별적 변수로 할당하라.


demo.destructuring = function () {
  var fruits = {
    banana: "yellow",
    apple: "red",
    melon: "green"
  };
  var fullname = ["Kil", "Dong", "Hong"];
  var banana = fruits.banana,
      apple = fruits.apple,
      melon = fruits.melon;
  var middleName = fullname[0],
      lastName = fullname[1],
      surName = fullname[2],
      _fullname$ = fullname[3],
      age = _fullname$ === void 0 ? 30 : _fullname$;
  console.log(banana, apple, melon);
  console.log(surName, middleName, lastName, age);
  var _ref = [lastName, middleName];
  middleName = _ref[0];
  lastName = _ref[1];
  console.log(surName, middleName, lastName, age);
}; // *** Spread operator/Rest parameter


demo.restParam = function () {
  // sumAll함수를 rest parameter를 받는 arrow function으로 재작성해 동작하도록 만드세요.
  var sumAll2 = function sumAll2() {
    var res = 0;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    args.forEach(function (v) {
      return res += v;
    });
    return res;
  };

  console.log(sumAll2(10, 20, 30)); // 60이 출력되어야 함
}; // spread operator


demo.spreadOperator = function () {
  // 다음을 spread operator등 최대한 ES6 syntax를 활용해 단순하게 재작성 하세요.
  var getMinMax = function getMinMax(type) {
    for (var _len2 = arguments.length, val = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      val[_key2 - 1] = arguments[_key2];
    }

    return Math[type].apply(Math, val);
  };

  console.log(getMinMax("max", 20, 30, 40));
}; // *** Template literals


demo.templateLiterals = function () {
  // template literal로 변경 하세요.
  // '월'과 '일'의 경우 1자리수일 경우, 2자리로 표현하게 해주세요.
  //  ==> 2018월1일5일 --> 2018년 01월05일
  function getDate() {
    var today = new Date();

    var get2digit = function get2digit(val) {
      return val < 10 ? "0".concat(val) : val;
    };

    return "".concat(today.getFullYear(), "\uB144 ").concat(get2digit(today.getMonth() + 1), "\uC6D4").concat(get2digit(today.getDay()), "\uC77C");
  }

  console.log(getDate());
}; // tagged template


demo.taggedTemplate = function () {
  // single quotation을 double quotation으로 변경하는 tagged template을 작성하세요.
  function dblQuote(literals) {
    var res = "";
    literals.forEach(function (v) {
      res += v.replace(/'/g, "\"");
    });
    return res;
  }

  console.log(dblQuote(_templateObject()));
}; // *** Class


demo.class = function () {
  // 다음을 ES6 class로 변환하세요.
  var Animal =
  /*#__PURE__*/
  function () {
    function Animal(name) {
      _classCallCheck(this, Animal);

      this.name = name;
      this.color = "white";
    }

    _createClass(Animal, [{
      key: "getName",
      value: function getName() {
        return this.name;
      }
    }, {
      key: "bark",
      value: function bark() {
        console.log("bark!");
      }
    }, {
      key: "$color",
      get: function get() {
        return this.color;
      },
      set: function set(color) {
        this.color = color;
      }
    }]);

    return Animal;
  }();

  var Dog =
  /*#__PURE__*/
  function (_Animal) {
    _inherits(Dog, _Animal);

    function Dog(name) {
      _classCallCheck(this, Dog);

      return _possibleConstructorReturn(this, _getPrototypeOf(Dog).call(this, name));
    }

    _createClass(Dog, [{
      key: "bark",
      value: function bark() {
        console.log("왈왈~!");
      }
    }], [{
      key: "factory",
      value: function factory(name) {
        return new this(name);
      }
    }]);

    return Dog;
  }(Animal);

  var dog = Dog.factory("Jay");
  dog.$color = "red";
  dog.bark();
  console.info(dog.color, dog.getName());
}; // *** Modules


demo.modules = function () {
  // module.mjs를 import 해서 다음과 같이 사용되게 만드세요.
  // getMax --> getMaxNumber
  console.log((0, _module.default)(10, 100, 20));
  console.log((0, _module.isString)("abc"));
  console.log(_module.colorList);
}; // *** Promise


demo.promise = function () {
  // 다음을 Promise로 변환 하세요.

  /*setTimeout(() => {
      console.count("Timer callback hell! -.-");
       setTimeout(() => {
          console.count("Timer callback hell! -.-");
           setTimeout(() => {
              console.count("Timer callback hell! -.-");
          }, 200);
      }, 200);
  }, 200);*/
  new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve("Timer callback hell! -.-");
    }, 200);
  }).then(function (msg) {
    console.count(msg);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve("Timer callback hell! -.-");
      }, 200);
    });
  }).then(function (msg) {
    console.count(msg);
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        return resolve("Timer callback hell! -.-");
      }, 200);
    });
  }).then(function (msg) {
    console.count(msg);
  });
}; // *** Async/Await


demo.asyncAwait = function () {
  // Promise 예제를 Async/Await로 변환하세요.
  function callAsync() {
    return _callAsync.apply(this, arguments);
  }

  function _callAsync() {
    _callAsync = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var getPromise;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              getPromise = function getPromise() {
                return new Promise(function (resolve, reject) {
                  setTimeout(function () {
                    return resolve("Timer callback hell! -.-");
                  }, 200);
                });
              };

              _context.t0 = console;
              _context.next = 4;
              return getPromise();

            case 4:
              _context.t1 = _context.sent;

              _context.t0.count.call(_context.t0, _context.t1);

              _context.t2 = console;
              _context.next = 9;
              return getPromise();

            case 9:
              _context.t3 = _context.sent;

              _context.t2.count.call(_context.t2, _context.t3);

              _context.t4 = console;
              _context.next = 14;
              return getPromise();

            case 14:
              _context.t5 = _context.sent;

              _context.t4.count.call(_context.t4, _context.t5);

            case 16:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _callAsync.apply(this, arguments);
  }

  callAsync();
}; // *** fetch API


demo.fetch =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
regeneratorRuntime.mark(function _callee2() {
  var data;
  return regeneratorRuntime.wrap(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return fetch("./test-data.json", {
            method: "GET"
          }).then(function (res) {
            return res.json();
          });

        case 2:
          data = _context2.sent;
          console.log(data);

        case 4:
        case "end":
          return _context2.stop();
      }
    }
  }, _callee2);
}));