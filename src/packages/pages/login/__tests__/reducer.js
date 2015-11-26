import {expect} from "chai"
import {merge} from "ramda"
import {loginFormUpdate} from "../action-creators"
import reducer from "../reducer"

describe("login reducer", () => {

  it("will return an object by default", () => {
    expect(reducer(undefined, loginFormUpdate({})))
      .to.be.an("object")
  })

  it("will return the original state if unhandled", () => {
    const initialState = {value: "foo"}
    const unhandledAction = {
      type: "NOT_LOGIN_FORM_UPDATE",
      payload: {},
    }
    expect(reducer(initialState, unhandledAction)).to.equal(initialState)
  })

  it("will add a prop to the login form state", () => {
    const payload = {
      email: "email",
    }
    const state = reducer({}, loginFormUpdate(payload))

    expect(state).to.eql({
      form: payload,
    })
  })

  it("will add multiple props to the login form state", () => {
    const payload = {
      email: "email",
    }

    const secondPayload = {
      password: "password",
    }


    let state = reducer({}, loginFormUpdate(payload))
    state = reducer(state, loginFormUpdate(secondPayload))

    expect(state).to.eql({
      form: merge(payload, secondPayload),
    })
  })
})
