import chai, {expect} from "chai"
import reactAssertions, {shallowRender} from "chai-react-assertions"
import React from "react"
chai.use(reactAssertions)

import SpinnerWrapper from "../spinner-wrapper"

describe("SpinnerWrapper", function() {

  before(() => {
    this.spinnerText = "Loading"
  })

  describe("when isFetching props is true", () => {
    beforeEach(() => {
      this.renderedTree = shallowRender(
        <SpinnerWrapper
          showSpinner={true}
          spinnerText={this.spinnerText}
        >
          <div>Test component</div>
        </SpinnerWrapper>
      )
    })

    it("Contains the Loading text", () => {
      expect(this.renderedTree)
        .to
        .contain
        .elementWithText(this.spinnerText) === true
    })

    it("Doesn't contain child component", () => {
      expect(this.renderedTree)
        .to
        .not
        .contain
        .elementWithProps(
          "div",
          {children: "Test component"}
        ) === true
    })
  })

  describe("when isFetching props is false", () => {
    beforeEach(() => {
      this.renderedTree = shallowRender(
        <SpinnerWrapper
          isFetching={false}
          spinnerText={this.spinnerText}
        >
          <div>Test component</div>
        </SpinnerWrapper>
      )
    })

    it("Doesn't contains the Loading text", () => {
      expect(this.renderedTree)
        .to
        .not
        .contain
        .elementWithText(this.spinnerText) === true
    })

    it("Contains the child component", () => {
      expect(this.renderedTree)
        .to
        .contain
        .elementWithProps(
          "div",
          {children: "Test component"}
        ) === true
    })
  })
})
