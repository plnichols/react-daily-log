import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import Form from '../form/Form';
import List from '../list/List';

let wrapper;

// Unit Under Test
function uut() {
	return mount(<Home />);
}

beforeEach(() => {
	wrapper = uut();
});

describe('Home', () => {
  it('should display the heading and description', () => {
		expect(wrapper.find('.home__title')).toExist();
		expect(wrapper.find('.home__description')).toExist();
	});

	it('should display a Form component', function() {
		expect(wrapper.find(Form)).toExist();
	});

  it('should display a List component', function() {
    expect(wrapper.find(List)).toExist();
  });

  it('should have a default state', function() {
    console.log(wrapper.state());
    expect(wrapper.state).toExist();
  });
});
