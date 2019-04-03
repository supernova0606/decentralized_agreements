'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _Layout = require('../../components/Layout');

var _Layout2 = _interopRequireDefault(_Layout);

var _brd = require('../../ethereum/brd');

var _brd2 = _interopRequireDefault(_brd);

var _web = require('../../ethereum/web3');

var _web2 = _interopRequireDefault(_web);

var _FundForm = require('../../components/FundForm');

var _FundForm2 = _interopRequireDefault(_FundForm);

var _routes = require('../../routes');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/home/Desktop/deca_brd/pages/brds/show.js?entry';


var BrdShow = function (_Component) {
  (0, _inherits3.default)(BrdShow, _Component);

  function BrdShow() {
    (0, _classCallCheck3.default)(this, BrdShow);

    return (0, _possibleConstructorReturn3.default)(this, (BrdShow.__proto__ || (0, _getPrototypeOf2.default)(BrdShow)).apply(this, arguments));
  }

  (0, _createClass3.default)(BrdShow, [{
    key: 'renderCards',
    value: function renderCards() {
      var _props = this.props,
          minimumContribution = _props.minimumContribution,
          balance = _props.balance,
          requestsCount = _props.requestsCount,
          approversCount = _props.approversCount,
          manager = _props.manager;

      var items = [{
        header: manager,
        meta: 'Manager address',
        description: 'Manager who owns this room',
        style: { overflowWrap: 'break-word' }
      }, {
        header: minimumContribution,
        meta: 'Funding Minimum',
        description: 'You must fund at least this much to participate'
      }, {
        header: requestsCount,
        meta: 'Number of Pending Deals'
      }, {
        header: approversCount,
        meta: 'Number of Members'
      }, {
        header: _web2.default.utils.fromWei(balance, 'ether') + ' ETH',
        meta: 'House Balance'
      }];

      return _react2.default.createElement(_semanticUiReact.Card.Group, { items: items, __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(_Layout2.default, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 65
        }
      }, _react2.default.createElement(_routes.Link, { route: '/', __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        }
      }, 'Back')), _react2.default.createElement(_semanticUiReact.Grid, { style: { marginTop: 10 }, __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 10, __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, this.renderCards()), _react2.default.createElement(_semanticUiReact.Grid.Column, { width: 6, __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, _react2.default.createElement(_FundForm2.default, { address: this.props.address, __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }))), _react2.default.createElement(_semanticUiReact.Grid.Row, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, _react2.default.createElement(_semanticUiReact.Grid.Column, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        }
      }, _react2.default.createElement(_routes.Link, { route: '/brds/' + this.props.address + '/requests', __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        }
      }, _react2.default.createElement('a', {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        }
      }, _react2.default.createElement(_semanticUiReact.Button, { color: 'green', __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        }
      }, 'View Deals')))))));
    }
  }], [{
    key: 'getInitialProps',
    value: function () {
      var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(props) {
        var brd, summary;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                brd = (0, _brd2.default)(props.query.address);
                _context.next = 3;
                return brd.methods.getSummary().call();

              case 3:
                summary = _context.sent;
                return _context.abrupt('return', {
                  address: props.query.address,
                  minimumContribution: summary[0],
                  balance: summary[1],
                  requestsCount: summary[2],
                  approversCount: summary[3],
                  manager: summary[4]
                });

              case 5:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps(_x) {
        return _ref.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return BrdShow;
}(_react.Component);

exports.default = BrdShow;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2JyZHMvc2hvdy5qcyJdLCJuYW1lcyI6WyJSZWFjdCIsIkNvbXBvbmVudCIsIkNhcmQiLCJHcmlkIiwiQnV0dG9uIiwiTGF5b3V0IiwiQnJkIiwid2ViMyIsIkZ1bmRGb3JtIiwiTGluayIsIkJyZFNob3ciLCJwcm9wcyIsIm1pbmltdW1Db250cmlidXRpb24iLCJiYWxhbmNlIiwicmVxdWVzdHNDb3VudCIsImFwcHJvdmVyc0NvdW50IiwibWFuYWdlciIsIml0ZW1zIiwiaGVhZGVyIiwibWV0YSIsImRlc2NyaXB0aW9uIiwic3R5bGUiLCJvdmVyZmxvd1dyYXAiLCJ1dGlscyIsImZyb21XZWkiLCJtYXJnaW5Ub3AiLCJyZW5kZXJDYXJkcyIsImFkZHJlc3MiLCJicmQiLCJxdWVyeSIsIm1ldGhvZHMiLCJnZXRTdW1tYXJ5IiwiY2FsbCIsInN1bW1hcnkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBUyxBQUFNLEFBQU07O0FBQ3JCLEFBQU8sQUFBWTs7OztBQUNuQixBQUFPLEFBQVM7Ozs7QUFDaEIsQUFBTyxBQUFVOzs7O0FBQ2pCLEFBQU8sQUFBYzs7OztBQUNyQixBQUFTLEFBQVk7Ozs7Ozs7SSxBQUVmOzs7Ozs7Ozs7OztrQ0FnQlU7bUJBT1IsS0FQUSxBQU9IO1VBUEcsQUFFViw2QkFGVSxBQUVWO1VBRlUsQUFHVixpQkFIVSxBQUdWO1VBSFUsQUFJVix1QkFKVSxBQUlWO1VBSlUsQUFLVix3QkFMVSxBQUtWO1VBTFUsQUFNVixpQkFOVSxBQU1WLEFBR0Y7O1VBQU07Z0JBQ0osQUFDVSxBQUNSO2NBRkYsQUFFUSxBQUNOO3FCQUhGLEFBR2UsQUFDYjtlQUFPLEVBQUUsY0FMQyxBQUNaLEFBSVMsQUFBZ0I7QUFKekIsQUFDRSxPQUZVO2dCQU9aLEFBQ1UsQUFDUjtjQUZGLEFBRVEsQUFDTjtxQkFWVSxBQU9aLEFBR2U7QUFIZixBQUNFO2dCQUlGLEFBQ1UsQUFDUjtjQWRVLEFBWVosQUFFUTtBQUZSLEFBQ0U7Z0JBR0YsQUFDVSxBQUNSO2NBbEJVLEFBZ0JaLEFBRVE7QUFGUixBQUNFO2dCQUlXLGNBQUEsQUFBSyxNQUFMLEFBQVcsUUFBWCxBQUFtQixTQUE5QixBQUFXLEFBQTRCLFdBRHpDLEFBRUU7Y0F0QkosQUFBYyxBQW9CWixBQUVRLEFBSVY7QUFORSxBQUNFOzsyQ0FLRyxBQUFDLHNCQUFELEFBQU0sU0FBTSxPQUFaLEFBQW1CO29CQUFuQjtzQkFBUCxBQUFPLEFBQ1I7QUFEUTtPQUFBOzs7OzZCQUdBLEFBQ1A7NkJBQ0UsQUFBQzs7b0JBQUQ7c0JBQUEsQUFDRTtBQURGO0FBQUEsT0FBQSxrQkFDRSxBQUFDLDhCQUFLLE9BQU47b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBO0FBQUE7QUFBQSxTQUZKLEFBQ0UsQUFDRSxBQUdGLDBCQUFBLEFBQUMsdUNBQUssT0FBTyxFQUFFLFdBQWYsQUFBYSxBQUFhO29CQUExQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUF5QjtBQUF6QjtjQURGLEFBQ0UsQUFBeUIsQUFBSyxBQUU5QixnQ0FBQyxjQUFELHNCQUFBLEFBQU0sVUFBTyxPQUFiLEFBQW9CO29CQUFwQjtzQkFBQSxBQUNFO0FBREY7eUJBQ0UsQUFBQyxvQ0FBUyxTQUFTLEtBQUEsQUFBSyxNQUF4QixBQUE4QjtvQkFBOUI7c0JBTE4sQUFDRSxBQUdFLEFBQ0UsQUFHSjtBQUhJOzRCQUdILGNBQUQsc0JBQUEsQUFBTTs7b0JBQU47c0JBQUEsQUFDRTtBQURGO0FBQUEseUJBQ0csY0FBRCxzQkFBQSxBQUFNOztvQkFBTjtzQkFBQSxBQUNFO0FBREY7QUFBQSx5QkFDRSxBQUFDLDhCQUFLLGtCQUFnQixLQUFBLEFBQUssTUFBckIsQUFBMkIsVUFBakM7b0JBQUE7c0JBQUEsQUFDRTtBQURGO3lCQUNFLGNBQUE7O29CQUFBO3NCQUFBLEFBQ0U7QUFERjtBQUFBLHlCQUNFLEFBQUMseUNBQU8sT0FBUixBQUFjO29CQUFkO3NCQUFBO0FBQUE7U0FsQmQsQUFDRSxBQUtFLEFBUUUsQUFDRSxBQUNFLEFBQ0UsQUFDRSxBQVFmOzs7OzsyRyxBQWhGNEI7Ozs7O21CQUNyQjtBLHNCQUFNLG1CQUFJLE1BQUEsQUFBTSxNLEFBQVYsQUFBZ0I7O3VCQUVOLElBQUEsQUFBSSxRQUFKLEFBQVksYSxBQUFaLEFBQXlCOzttQkFBekM7QTs7MkJBR0ssTUFBQSxBQUFNLE1BRFYsQUFDZ0IsQUFDckI7dUNBQXFCLFFBRmhCLEFBRWdCLEFBQVEsQUFDN0I7MkJBQVMsUUFISixBQUdJLEFBQVEsQUFDakI7aUNBQWUsUUFKVixBQUlVLEFBQVEsQUFDdkI7a0NBQWdCLFFBTFgsQUFLVyxBQUFRLEFBQ3hCOzJCQUFTLFEsQUFOSixBQU1JLEFBQVE7QUFOWixBQUNMOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNkVOLEEsQUFwRnNCOztrQkFvRnRCLEFBQWUiLCJmaWxlIjoic2hvdy5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvaG9tZS9EZXNrdG9wL2RlY2FfYnJkIn0=