import chai, {expect} from "chai"
import reactAssertions, {shallowRender} from "chai-react-assertions"
import React from "react"
import LoginForm from "../components/form"
chai.use(reactAssertions)

describe("LoginForm", function() {
  beforeEach(() => {
    this.mockLoginState = {
      email: "email@email.com",
      password: "password",
    }

    this.renderedTree = shallowRender(
      <LoginForm
        form={this.mockLoginState}
        loginSubmit={() => {}}
        loginFormUpdate={() => {}}
      />
    )
  })

  it("will contain a email input field", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "Input",
        {id: "login-email",
        type: "text",
        label: "Email",
        value: this.mockLoginState.email,
        placeholder: "Enter Email",
        disabled: false,
        hasFeedback: false,
        multiple: false,
        }
      )
  })

  it("will contain a password input field", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "Input",
        {id: "login-password",
        type: "password",
        label: "Password",
        value: this.mockLoginState.password,
        disabled: false,
        hasFeedback: false,
        multiple: false,
        }
      )
  })

  it("will contain a button", () => {
    expect(this.renderedTree)
      .to
      .contain
      .elementWithProps(
        "ButtonInput",
        {value: "Login"}
      )
  })
})
