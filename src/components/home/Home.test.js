import React from 'react';
import expect from 'expect';
import { shallow, mount } from 'enzyme';
import Home from './Home';
import Form from '../form/Form';

// Unit Under Test
function uut() {
	return mount(<Home />);
}

describe('Home', () => {
	it('should display the heading and description', () => {
		const wrapper = uut();
		expect(wrapper.find('.home__title')).toExist();
		expect(wrapper.find('.home__description')).toExist();
	});

	it('should display a log entry form', function() {
		const wrapper = uut();
		expect(wrapper.find(Form)).toExist();
	});

	it('should display a list of log entries', function() {
		const wrapper = uut();
		expect(wrapper.find('.list')).toExist();
	});
});
