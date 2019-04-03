'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _web = require('./web3');

var _web2 = _interopRequireDefault(_web);

var _Brd = require('./build/Brd.json');

var _Brd2 = _interopRequireDefault(_Brd);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (address) {
  return new _web2.default.eth.Contract(JSON.parse(_Brd2.default.interface), address);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtL2JyZC5qcyJdLCJuYW1lcyI6WyJ3ZWIzIiwiQnJkIiwiZXRoIiwiQ29udHJhY3QiLCJKU09OIiwicGFyc2UiLCJpbnRlcmZhY2UiLCJhZGRyZXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxBQUFPLEFBQVAsQUFBaUIsQUFBakI7Ozs7QUFDQSxBQUFPLEFBQVAsQUFBZ0IsQUFBaEIsQUFFQTs7Ozs7O2tCQUFlLG1CQUFXLEFBQ3hCO1NBQU8sSUFBSSxjQUFLLEFBQUwsSUFBUyxBQUFiLFNBQXNCLEtBQUssQUFBTCxNQUFXLGNBQUksQUFBZixBQUF0QixZQUFpRCxBQUFqRCxBQUFQLEFBQ0Q7QUFGRCIsImZpbGUiOiJicmQuanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL2hvbWUvRGVza3RvcC9kZWNhX2JyZCJ9