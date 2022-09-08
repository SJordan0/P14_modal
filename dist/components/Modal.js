"use strict";

require("core-js/modules/web.dom-collections.iterator.js");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ModalMessage = exports.ModalContainer = exports.ModalButton = void 0;
exports.default = Modal;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireWildcard(require("styled-components"));

var _templateObject, _templateObject2, _templateObject3;

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || typeof obj !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

const ModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  width: 100%;\n  height: 100vh;\n  margin: 0;\n  position: -webkit-sticky;\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  background-color: ", ";\n  padding-bottom: 20rem;\n"])), props => props.theme.containerBg);

exports.ModalContainer = ModalContainer;

const ModalMessage = _styledComponents.default.div(_templateObject2 || (_templateObject2 = _taggedTemplateLiteral(["\n  width: 25rem;\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n  position: -webkit-sticky;\n  position: sticky;\n  top: 40%;\n  background-color: ", ";\n  border: 1rem ridge ", ";\n  border-radius: 2rem;\n  color: white;\n  font-size: 1.3rem;\n  font-weight: bold;\n  padding: 1rem 2rem;\n"])), props => props.theme.messageBg, props => props.theme.borderColor);

exports.ModalMessage = ModalMessage;

const ModalButton = _styledComponents.default.button(_templateObject3 || (_templateObject3 = _taggedTemplateLiteral(["\n  width: 3rem;\n  height: 3rem;\n  background-color: ", ";\n  border: 0.5rem ridge ", ";\n  border-radius: 2rem;\n  margin-top: 0.5rem;\n  font-size: 1.5rem;\n  font-weight: bold;\n  &:hover {\n    color: ", ";\n    background-color: ", ";\n  }\n"])), props => props.theme.buttonBg, props => props.theme.borderColor, props => props.theme.buttonHoverTxt, props => props.theme.buttonHoverBg);

exports.ModalButton = ModalButton;

function Modal(props) {
  return /*#__PURE__*/_react.default.createElement(_styledComponents.ThemeProvider, {
    theme: props.theme
  }, /*#__PURE__*/_react.default.createElement(ModalContainer, null, /*#__PURE__*/_react.default.createElement(ModalMessage, null, /*#__PURE__*/_react.default.createElement("p", null, props.text), /*#__PURE__*/_react.default.createElement(ModalButton, {
    onClick: props.close
  }, "X"))));
}