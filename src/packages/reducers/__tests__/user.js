import {expect} from "chai"
import userReducer from "../user"

describe("features/user/reducer", () =>  {
  it("is a function", () =>  {
    expect(userReducer).to.be.a("function")
  })
})
