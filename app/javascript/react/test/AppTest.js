import App from '../src/App';
import React from 'react'
import { configure } from 'enzyme';
import jasmineEnzyme from 'jasmine-enzyme';

describe('A test for App', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(<App />)
  })

  it('should pass', () => {
    expect(wrapper.find('h1').text()).toEqual("Hello World")
  })
})
