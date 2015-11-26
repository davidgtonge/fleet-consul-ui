import chai, {expect} from "chai"
import reactAssertions, {shallowRender} from "chai-react-assertions"
import React from "react"
chai.use(reactAssertions)

import PrimaryTitle from "../text/primary-title"

describe("PrimaryTitle", function() {
  beforeEach(() => {
    this.testText = "test"

    this.renderedTree = shallowRender(
      <PrimaryTitle>{this.testText}</PrimaryTitle>
    )
  })

  it("Will render with a primary title class", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "Text",
        {className: "primary-title"}
      )
  })

  it("Will render with child text", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "Text",
        {children: this.testText}
      )
  })
})
