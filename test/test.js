import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import CategoriedInput from '../dist/categoreact'
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

// import jsdom from 'jsdom'
// const doc = jsdom.jsdom('<!doctype html><html><body></body></html>')
// global.document = doc
// global.window = doc.defaultView

describe('<CategoriedInput />', () => {

  describe('<Foo />', () => {

    it('calls componentDidMount', () => {
      expect(shallow(<CategoriedInput />).contains(<h1>Hello world</h1>)).to.equal(true)
    });

  });

});

// var assert = require('assert');
// describe('Array', function() {
//   describe('#indexOf()', function() {
//     it('should return -1 when the value is not present', function() {
//       assert.equal(-1, [1,2,3].indexOf(4));
//     });
//   });
// });
