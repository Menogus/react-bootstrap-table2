"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.CheckBox = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _const = _interopRequireDefault(require("../const"));

var _bootstrap = require("../contexts/bootstrap");

var _utils = _interopRequireDefault(require("../utils"));

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var CheckBox = function CheckBox(_ref) {
  var className = _ref.className,
      checked = _ref.checked,
      indeterminate = _ref.indeterminate;
  return /*#__PURE__*/_react["default"].createElement("input", {
    type: "checkbox",
    checked: checked,
    className: className,
    ref: function ref(input) {
      if (input) input.indeterminate = indeterminate; // eslint-disable-line no-param-reassign
    },
    onChange: function onChange() {}
  });
};

exports.CheckBox = CheckBox;
CheckBox.propTypes = {
  checked: _propTypes["default"].bool.isRequired,
  indeterminate: _propTypes["default"].bool.isRequired,
  className: _propTypes["default"].string
};

var SelectionHeaderCell = /*#__PURE__*/function (_Component) {
  _inherits(SelectionHeaderCell, _Component);

  var _super = _createSuper(SelectionHeaderCell);

  function SelectionHeaderCell() {
    var _this;

    _classCallCheck(this, SelectionHeaderCell);

    _this = _super.call(this);
    _this.handleCheckBoxClick = _this.handleCheckBoxClick.bind(_assertThisInitialized(_this));
    return _this;
  }
  /**
   * avoid updating if button is
   * 1. radio
   * 2. status was not changed.
   */


  _createClass(SelectionHeaderCell, [{
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(nextProps) {
      var ROW_SELECT_SINGLE = _const["default"].ROW_SELECT_SINGLE;
      var _this$props = this.props,
          mode = _this$props.mode,
          checkedStatus = _this$props.checkedStatus;
      if (mode === ROW_SELECT_SINGLE) return false;
      return nextProps.checkedStatus !== checkedStatus;
    }
  }, {
    key: "handleCheckBoxClick",
    value: function handleCheckBoxClick(e) {
      var _this$props2 = this.props,
          onAllRowsSelect = _this$props2.onAllRowsSelect,
          checkedStatus = _this$props2.checkedStatus;
      var isUnSelect = checkedStatus === _const["default"].CHECKBOX_STATUS_CHECKED || checkedStatus === _const["default"].CHECKBOX_STATUS_INDETERMINATE;
      onAllRowsSelect(e, isUnSelect);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var CHECKBOX_STATUS_CHECKED = _const["default"].CHECKBOX_STATUS_CHECKED,
          CHECKBOX_STATUS_INDETERMINATE = _const["default"].CHECKBOX_STATUS_INDETERMINATE,
          ROW_SELECT_MULTIPLE = _const["default"].ROW_SELECT_MULTIPLE;
      var _this$props3 = this.props,
          mode = _this$props3.mode,
          checkedStatus = _this$props3.checkedStatus,
          selectionHeaderRenderer = _this$props3.selectionHeaderRenderer,
          hideSelectAll = _this$props3.hideSelectAll,
          headerColumnStyle = _this$props3.headerColumnStyle;

      if (hideSelectAll) {
        return /*#__PURE__*/_react["default"].createElement("th", {
          "data-row-selection": true
        });
      }

      var checked = checkedStatus === CHECKBOX_STATUS_CHECKED;
      var indeterminate = checkedStatus === CHECKBOX_STATUS_INDETERMINATE;
      var attrs = {};
      var content;

      if (selectionHeaderRenderer || mode === ROW_SELECT_MULTIPLE) {
        attrs.onClick = this.handleCheckBoxClick;
      }

      attrs.style = _utils["default"].isFunction(headerColumnStyle) ? headerColumnStyle(checkedStatus) : headerColumnStyle;
      return /*#__PURE__*/_react["default"].createElement(_bootstrap.BootstrapContext.Consumer, null, function (_ref2) {
        var bootstrap4 = _ref2.bootstrap4;

        if (selectionHeaderRenderer) {
          content = selectionHeaderRenderer({
            mode: mode,
            checked: checked,
            indeterminate: indeterminate
          });
        } else if (mode === ROW_SELECT_MULTIPLE) {
          content = /*#__PURE__*/_react["default"].createElement(CheckBox, _extends({}, _this2.props, {
            checked: checked,
            className: bootstrap4 ? 'selection-input-4' : '',
            indeterminate: indeterminate
          }));
        }

        return /*#__PURE__*/_react["default"].createElement("th", _extends({
          className: "selection-cell-header",
          "data-row-selection": true
        }, attrs), content);
      });
    }
  }]);

  return SelectionHeaderCell;
}(_react.Component);

exports["default"] = SelectionHeaderCell;

_defineProperty(SelectionHeaderCell, "propTypes", {
  mode: _propTypes["default"].string.isRequired,
  checkedStatus: _propTypes["default"].string,
  onAllRowsSelect: _propTypes["default"].func,
  hideSelectAll: _propTypes["default"].bool,
  selectionHeaderRenderer: _propTypes["default"].func,
  headerColumnStyle: _propTypes["default"].oneOfType([_propTypes["default"].object, _propTypes["default"].func])
});