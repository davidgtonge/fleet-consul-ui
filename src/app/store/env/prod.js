import {merge} from "ramda"
import {combineReducers, createStore, applyMiddleware, compose} from "redux"
import createLogger from "redux-logger"
import {reduxReactRouter, routerStateReducer} from "redux-router"
import createHistory from "history/lib/createBrowserHistory"
import DevTools from "../../utils/dev-tools"

export default function configureStore(routes, middleware, reducers) {
  const rootReducer = combineReducers(
    merge(
      reducers,
      {router: routerStateReducer}
    ))
  const store = buildStore(middleware, rootReducer)
  return store
}

function buildStore(routes, middleware, rootReducer) {
  const middlewareToApply = [
    createLogger(),
    ...middleware,
  ]
  return compose(
    reduxReactRouter({routes, createHistory}),
    applyMiddleware(...middlewareToApply),
    DevTools.instrument()
  )(createStore)
}
