import React from "react";
import expect from "expect";
import { shallow } from "enzyme";
import App from "./App";

// Unit Under Test
function uut() {
  // here we're mocking the children props
  // this would usually be a component returned by the router
  return shallow(<App children={<home className="home" />} />);
}

describe("App", () => {
  it("should render the header, footer and container", () => {
    const wrapper = uut();
    expect(wrapper.find(".header").node).toExist();
    expect(wrapper.find(".content").node).toExist();
    expect(wrapper.find(".footer").node).toExist();
  });

  it("should render the home component in the content element", () => {
    const wrapper = uut();
    expect(wrapper.find(".content").find(".home").node).toExist();
  });
});
