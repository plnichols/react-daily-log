import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import List from "./List";

// Unit Under Test
function uut() {
	return shallow(<List />);
}

describe('List', () => {
	it('should receive props from parent component', function() {
		const wrapper = uut();

		console.log(wrapper.props());

		expect(wrapper.props()).toExist();
	});

	xit('should start with an empty list', function() {
		const wrapper = uut();

		expect(wrapper.props.logs.length).toNotBe(0);
	});
});
