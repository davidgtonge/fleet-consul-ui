import React from "react"
import ReactDOM from "react-dom"
import Root from "./container"
import configureStore from "./store/configure-store"

export default function(routes, middleware, reducers) {
  const store = configureStore(routes, middleware, reducers)
  ReactDOM.render(
    <Root store={store} />,
    document.getElementById("app-container")
  )
  store.dispatch({
    type: "APP_START",
  })
  return store
}
