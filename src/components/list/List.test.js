import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import List from "./List";

// Unit Under Test
function uut() {
	return shallow(<List />);
}

describe('List', () => {
	it('should start with an empty list', function() {
    const wrapper = uut();

    expect(wrapper.props.logs.length).toBe(0);
	});
});
