import React from "react"
import {connect} from "react-redux"
import SpinnerWrapper from "./../../components/spinner-wrapper"

export default connect(mapStateToProps)(InitializationGuard)

function InitializationGuard(props) {
  return(
    <SpinnerWrapper
    spinnerText="Initializing.."
    showSpinner={!props.initialized}
    >
    {props.children}
    </SpinnerWrapper>
  )
}

function mapStateToProps(state) {
  return state.app
}
