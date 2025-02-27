"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.SizePerPageDropdownWithAdapter = void 0;

var _react = _interopRequireWildcard(require("react"));

var _pageResolver2 = _interopRequireDefault(require("./page-resolver"));

var _sizePerPageDropdown = _interopRequireDefault(require("./size-per-page-dropdown"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var sizePerPageDropdownAdapter = function sizePerPageDropdownAdapter(WrappedComponent) {
  return /*#__PURE__*/function (_pageResolver) {
    _inherits(SizePerPageDropdownAdapter, _pageResolver);

    var _super = _createSuper(SizePerPageDropdownAdapter);

    function SizePerPageDropdownAdapter(props) {
      var _this;

      _classCallCheck(this, SizePerPageDropdownAdapter);

      _this = _super.call(this, props);
      _this.closeDropDown = _this.closeDropDown.bind(_assertThisInitialized(_this));
      _this.toggleDropDown = _this.toggleDropDown.bind(_assertThisInitialized(_this));
      _this.handleChangeSizePerPage = _this.handleChangeSizePerPage.bind(_assertThisInitialized(_this));
      _this.state = {
        dropdownOpen: false
      };
      return _this;
    }

    _createClass(SizePerPageDropdownAdapter, [{
      key: "toggleDropDown",
      value: function toggleDropDown() {
        var dropdownOpen = !this.state.dropdownOpen;
        this.setState(function () {
          return {
            dropdownOpen: dropdownOpen
          };
        });
      }
    }, {
      key: "closeDropDown",
      value: function closeDropDown() {
        this.setState(function () {
          return {
            dropdownOpen: false
          };
        });
      }
    }, {
      key: "handleChangeSizePerPage",
      value: function handleChangeSizePerPage(sizePerPage) {
        this.props.onSizePerPageChange(sizePerPage);
        this.closeDropDown();
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            tableId = _this$props.tableId,
            bootstrap4 = _this$props.bootstrap4,
            sizePerPageList = _this$props.sizePerPageList,
            currSizePerPage = _this$props.currSizePerPage,
            hideSizePerPage = _this$props.hideSizePerPage,
            sizePerPageRenderer = _this$props.sizePerPageRenderer,
            sizePerPageOptionRenderer = _this$props.sizePerPageOptionRenderer;
        var open = this.state.dropdownOpen;

        if (sizePerPageList.length > 1 && !hideSizePerPage) {
          if (sizePerPageRenderer) {
            return sizePerPageRenderer({
              options: this.calculateSizePerPageStatus(),
              currSizePerPage: "".concat(currSizePerPage),
              onSizePerPageChange: this.handleChangeSizePerPage
            });
          }

          return /*#__PURE__*/_react["default"].createElement(WrappedComponent, _extends({}, this.props, {
            currSizePerPage: "".concat(currSizePerPage),
            options: this.calculateSizePerPageStatus(),
            optionRenderer: sizePerPageOptionRenderer,
            onSizePerPageChange: this.handleChangeSizePerPage,
            onClick: this.toggleDropDown,
            onBlur: this.closeDropDown,
            open: open,
            tableId: tableId,
            bootstrap4: bootstrap4
          }));
        }

        return null;
      }
    }]);

    return SizePerPageDropdownAdapter;
  }((0, _pageResolver2["default"])(_react.Component));
};

var SizePerPageDropdownWithAdapter = sizePerPageDropdownAdapter(_sizePerPageDropdown["default"]);
exports.SizePerPageDropdownWithAdapter = SizePerPageDropdownWithAdapter;
var _default = sizePerPageDropdownAdapter;
exports["default"] = _default;