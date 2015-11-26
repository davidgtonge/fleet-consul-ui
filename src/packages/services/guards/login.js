import React from "react"
import {connect} from "react-redux"
import LoginController from "../../pages/login"

export default connect(mapStateToProps)(LoginGuard)

function LoginGuard(props) {
  if (!props.authenticated) {
    return(
      <LoginController />
    )
  }
  return (
    <div>
      {props.children}
    </div>
  )
}

function mapStateToProps(state) {
  return state.user
}
