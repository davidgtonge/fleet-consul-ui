import React, {PropTypes} from "react"
import {Input, ButtonInput} from "react-bootstrap/lib"
import SpinnerWrapper from "../../../components/spinner-wrapper"

export default function LoginForm(props) {
  return (
    <form>
      <Input
        id="login-email"
        type="text"
        label="Email"
        value={props.form.email}
        placeholder="Enter Email"
        onChange={getChangeHandler("email", props.loginFormUpdate)}
      />

      <Input
        id="login-password"
        type="password"
        label="Password"
        value={props.form.password}
        onChange={getChangeHandler("password", props.loginFormUpdate)}
      />

      <ButtonInput
        value="Login"
        onClick={() => props.loginSubmit(props.form)}
      />
    </form>
  )
}

LoginForm.propTypes = {
  loginFormUpdate: PropTypes.func.isRequired,
  loginSubmit: PropTypes.func.isRequired,
  form: PropTypes.object.isRequired,
}

function getChangeHandler(propName, handler) {
  return function(e) {
    handler(
      {[propName]: e.target.value}
    )
  }
}
