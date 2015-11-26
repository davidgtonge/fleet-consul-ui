import React, { PropTypes } from "react"
import { Provider } from "react-redux"
import { ReduxRouter } from "redux-router"

const Root = React.createClass({
  propTypes: {
    store: PropTypes.object.isRequired,
  },
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <ReduxRouter />
      </Provider>
    )
  },
})

export default Root
