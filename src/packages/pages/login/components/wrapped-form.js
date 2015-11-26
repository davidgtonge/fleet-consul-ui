import React, {PropTypes} from "react"
import {Input, ButtonInput} from "react-bootstrap/lib"
import SpinnerWrapper from "../../../components/spinner-wrapper"
import LoginForm from "./form"

export default function LoginFormWrappedInSpinner(props) {
  return (
    <SpinnerWrapper
      showSpinner={props.form.isFetching}
      spinnerText="Loading ..."
    >
      <LoginForm {...props}/>
    </SpinnerWrapper>
  )
}

LoginFormWrappedInSpinner.propTypes = {
  form: PropTypes.object.isRequired,
}
