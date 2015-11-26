import chai, {expect} from "chai"
import reactAssertions, {shallowRender} from "chai-react-assertions"
import React from "react"
import Home from "../index"
const HomeComponent = React.createFactory(Home)

chai.use(reactAssertions)

const renderedTree = shallowRender(HomeComponent)
it("says Hello World", () => {
  expect(renderedTree)
    .to
    .contain
    .elementWithText("Hello World") === true
})
