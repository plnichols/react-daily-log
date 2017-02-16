import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import { App } from './App';

function uut() {
  return shallow(<App />);
}

describe('App', () => {
  it('should render the header, footer and container', () => {
    const wrapper = uut();

    expect(wrapper.find('.header').node).toExist();
    expect(wrapper.find('.container').node).toExist();
    expect(wrapper.find('.footer').node).toExist();
  });
});
