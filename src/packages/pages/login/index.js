import React from "react"
import {connect} from "react-redux"
import {path} from "ramda"
import LoginForm from "./components/wrapped-form"
import actions from "./action-creators"
import loginReducer from "./reducer"

function mapStateToProps(state) {
  return state.login
}

export default connect(mapStateToProps, actions)(LoginForm)
