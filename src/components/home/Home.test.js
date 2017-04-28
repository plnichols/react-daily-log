import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import Home from "./Home";

// Unit Under Test
function uut() {
	return shallow(<Home />);
}

describe("Home", () => {
	it("should display the heading and description", () => {
		const wrapper = uut();
		expect(wrapper.find(".home__title").node).toExist();
		expect(wrapper.find(".home__description").node).toExist();
	});

	it("should display a log entry form", function() {
		const wrapper = uut();
		expect(wrapper.find("form").node).toExist();
	});

	it("should display a list of log entries", function() {
		const wrapper = uut();
		expect(wrapper.find(".list").node).toExist();
	});
});
