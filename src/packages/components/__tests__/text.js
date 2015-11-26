import chai, {expect} from "chai"
import reactAssertions, {shallowRender} from "chai-react-assertions"
import React from "react"
chai.use(reactAssertions)

import Text from "../text/text"

describe("Text", function() {
  beforeEach(() => {
    this.testText = "test"
    this.testClass = "test-class"

    this.renderedTree = shallowRender(
      <Text className={this.testClass}>{this.testText}</Text>
    )
  })

  it("Will render with a span with props", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "span",
        {className: this.testClass,
        children: this.testText,
        style: {},
        }
      )
  })
})
