import React, { PropTypes } from "react"
import { Provider } from "react-redux"
import { ReduxRouter } from "redux-router"
import DevTools from "../../utils/dev-tools"

const Root = React.createClass({
  propTypes: {
    store: PropTypes.object.isRequired,
  },
  render() {
    const {store} = this.props

    return (
      <Provider store={store}>
        <div>
          <ReduxRouter />
          <DevTools />
        </div>
      </Provider>
    )
  },
})
export default Root
