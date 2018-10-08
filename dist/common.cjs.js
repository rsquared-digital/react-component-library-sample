'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = _interopDefault(require('react'));
var styled = _interopDefault(require('styled-components'));

function _taggedTemplateLiteral(strings, raw) {
  if (!raw) {
    raw = strings.slice(0);
  }

  return Object.freeze(Object.defineProperties(strings, {
    raw: {
      value: Object.freeze(raw)
    }
  }));
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 5px 10px;\n  border: solid 1px #aaa;\n  border-radius: 3px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}
var ButtonWrapper = styled.button(_templateObject());

var Button = function Button(props) {
  return React.createElement(ButtonWrapper, {
    onClick: props.onClick
  }, props.text);
};

function _templateObject$1() {
  var data = _taggedTemplateLiteral(["\n  background: #fff;\n  padding: 5px 10px;\n  border: solid 1px #aaa;\n  border-radius: 3px;\n"]);

  _templateObject$1 = function _templateObject() {
    return data;
  };

  return data;
}
var TextboxWrapper = styled.input(_templateObject$1());

var Textbox = function Textbox(props) {
  return React.createElement(TextboxWrapper, {
    type: "text",
    onChange: props.onChange
  });
};

exports.Button = Button;
exports.Textbox = Textbox;
