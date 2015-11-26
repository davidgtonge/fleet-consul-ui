import React, {PropTypes} from "react"
import Spinner from "./spinner"

function SpinnerWrapper(props) {
  if (props.showSpinner) {
    return <Spinner text={props.spinnerText}/>
  }

  return (
    <div>
      {props.children}
    </div>
  )
}

SpinnerWrapper.propTypes = {
  spinnerText: PropTypes.string.isRequired,
  isFetching: PropTypes.bool,
}

export default SpinnerWrapper
