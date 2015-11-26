import React, {PropTypes} from "react"

function Spinner(props) {
  return (
    <div className="spinner">
      <h1>{props.text}</h1>
    </div>
  )
}

Spinner.propTypes = {
  text: PropTypes.string.isRequired,
}

export default Spinner
