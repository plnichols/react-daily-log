import React from "react";
import expect from "expect";
import { shallow, mount } from "enzyme";
import List from "./List";

let wrapper;

const logs = [
  {
    id: 123,
    text: 'Lorem ipsum',
    timestamp: 123456789
  }
];

// Unit Under Test
function uut() {
	return mount(<List logs={logs} />);
}

beforeEach(() => {
  wrapper = uut();
});

describe('List', () => {
	it('should receive props from its parent component', function() {
    expect(wrapper.props().logs.length).toBe(1);
    expect(wrapper.props().logs[0].id).toBe(123);
    expect(wrapper.props().logs[0].text).toBe('Lorem ipsum');
		expect(wrapper.props().logs[0].timestamp).toBe(123456789);
	});
});
