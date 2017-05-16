import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Form from './Form';

let wrapper;

// Unit Under Test
function uut() {
  return shallow(<Form />);
}

beforeEach(() => {
  wrapper = uut();
});

describe('Form', () => {
  it('should display a form with text input and submit button', function() {
    expect(wrapper.find('.form__input')).toExist();
    expect(wrapper.find('.form__submit')).toExist();
  });

  xit('should update the state when typing', function() {
    expect().toBe();
  });
});
