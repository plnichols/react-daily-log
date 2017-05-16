import React from "react";
import expect from "expect";
import { shallow, mount } from "enzyme";
import List from "./List";

const logs = [
  {
    id: 123,
    name: 'Some name',
    timestamp: 123456789
  }
];

// Unit Under Test
function uut() {
	return mount(<List logs={logs} />);
}

describe('List', () => {
	it('should receive props from its parent component', function() {
		const wrapper = uut();
    expect(wrapper.props().logs.length).toBe(1);
    expect(wrapper.props().logs[0].id).toBe(123);
    expect(wrapper.props().logs[0].name).toBe('Some name');
		expect(wrapper.props().logs[0].timestamp).toBe(123456789);
	});
});
