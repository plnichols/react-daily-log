import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import Form from './Form';

// Unit Under Test
function uut() {
  return shallow(<Form />);
}

describe('Form', () => {
  it('should display a form with text input and submit button', function() {
    const wrapper = uut();
    expect(wrapper.find('.form__input')).toExist();
    expect(wrapper.find('.form__submit')).toExist();
  });

  xit('should update the state when typing', function() {
    const wrapper = uut();
    expect().toBe();
  });
});
