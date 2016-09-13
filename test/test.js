// A lot of repetition, intentional for now
import jsdom from 'jsdom';
const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;
global.document = doc;
global.window = win;

import React from 'react';
import CategoriedInput from '../src/'
import { expect } from 'chai';
import { mount, shallow, render } from 'enzyme';

describe('<CategoriedInput />', () => {

  describe('Adding & rendering props', () => {
    it('allows us to set props', () => {
      let wrapper = mount(<CategoriedInput placeholder="Hello" categories={['hi']}/>)
      expect(wrapper.props().placeholder).to.equal('Hello')
      wrapper.setProps({ className: 'tst-cls' })
      expect(wrapper.hasClass('tst-cls'))
    })

    it('should display placeholder when there are no categories', () => {
      let wrapper = mount(<CategoriedInput categories={[]} />)
      expect(wrapper.childAt(1).contains('Add categories separated by tabs or commas'))
    })

    it('should render categories', () => {
      let wrapper = mount(<CategoriedInput categories={['Foo', 'Bar','Zoo']} />)
      expect(wrapper.childAt(1).children().length).to.equal(3)
      expect(wrapper.childAt(1).hasClass('catreact-render__tag'))
      expect(wrapper.children().first().contains('Foo'))
      expect(wrapper.children().last().contains('Zoo'))
    })

  });

  describe('Adding categories', () => {
    // it('should have a functioning onCategoryAdd handler', () => {
    //   let categoryArr = ['Foo', 'Bar', 'Baz']
    //   let addedValue = ''
    //
    //   let wrapper = mount(
    //     <CategoriedInput
    //       categories={categoryArr}
    //       onCategoriesUpdate={e => { categoryArr = e }}
    //       onCategoryAdd={e => { addedValue = e }}
    //     />)
    //
    //   expect(wrapper.childAt(1).children().length).to.equal(3)
    //   let input = wrapper.find('input').get(0)
    //   wrapper.find('input').simulate('change', {target: {value: 'FooBar,'}});
    //   // expect(wrapper.childAt(1).children().length).to.equal(4)
    //   expect(addedValue).to.equal('FooBar')
    // })

    it('should not add empty categories', () => {
      let categoryArr = ['Foo', 'Bar']
      let wrapper = mount(
        <CategoriedInput
          categories={categoryArr}
          onCategoriesUpdate={(e) => { categoryArr = e }}
        />)
      expect(categoryArr.length).to.equal(2)
      let input = wrapper.find('input').get(0)
      wrapper.find('input').simulate('change', {target: {value: '    ,'}});
      expect(categoryArr.length).to.equal(2)
    })

    it('should add categories with tabs', () => {
      let categoryArr = ['Foo', 'Bar']
      let wrapper = mount(
        <CategoriedInput
          categories={categoryArr}
          onCategoriesUpdate={(e) => { categoryArr = e }}
        />)

      let input = wrapper.find('input').get(0)
      wrapper.find('input').simulate('change', {
        target: {
          value: 'Baz'
        }
      });
      wrapper.find('input').simulate("keyDown", {
        which: 9,
        keyCode: 9,
        target: { selectionStart: 3 }
      });
      // It has cleared
      //
      console.log('val', input.value);
      console.log(categoryArr);
      expect(input.value).to.equal('')
    })

    it('should clear input upon comma', () => {
      let categoryArr = ['Foo', 'Bar']
      let wrapper = mount(
        <CategoriedInput
          categories={categoryArr}
          onCategoriesUpdate={(e) => { categoryArr = e }}
        />)
      let input = wrapper.find('input').get(0)
      wrapper.find('input').simulate('change', {target: {value: 'FooBar'}});
      expect(input.value).to.equal('FooBar')
      wrapper.find('input').simulate("change", {target: {value: 'foo,'}});

      // It has cleared
      expect(input.value).to.equal('')
    })
  })

  describe('Removing categories', () => {

    it('should delete categories', () => {
      let categoryArr = ['Foo', 'Bar']
      let wrapper = mount(
        <CategoriedInput
          categories={categoryArr}
          onCategoriesUpdate={(e) => { categoryArr = e }}
        />)
      expect(wrapper.childAt(1).children().length).to.equal(2)
      wrapper.find('.catreact-render__tag-close').first().simulate('click')
      wrapper.setProps({categories: categoryArr })
      expect(wrapper.childAt(1).children().length).to.equal(1)
      expect(categoryArr.length).to.equal(1)
    })

    it('should have a functioning onCategoryRemove handler', () => {
      let categoryArr = ['Foo']
      let removedValue = ''

      let wrapper = mount(
        <CategoriedInput
          categories={categoryArr}
          onCategoriesUpdate={e => { categoryArr = e }}
          onCategoryRemove={e => { removedValue = e }}
        />)

      expect(wrapper.childAt(1).children().length).to.equal(1)
      wrapper.find('.catreact-render__tag-close').simulate('click')
      expect(removedValue).to.equal('Foo')
    })

  })

  describe('Component methods', () =>{

    it('should parse categories', () => {
      let categoriesString = ' hello, world , my name, is patrick, '
      let allCategories = ['my name', 'world']
      let component = shallow(<CategoriedInput
        categories={[]}
        onCategoriesUpdate={(e) => { categoryArr = e }}
      />)
      let answer = component.instance().parseCategories(categoriesString, allCategories)
      expect(answer).to.eql(['hello', 'is patrick'])
    })

  })
});
