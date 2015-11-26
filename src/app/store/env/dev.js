import {merge} from "ramda"
import {
  combineReducers,
  createStore,
  applyMiddleware,
  compose} from "redux"
import thunk from "redux-thunk"
import createLogger from "redux-logger"
import {reduxReactRouter, routerStateReducer} from "redux-router"
import createHistory from "history/lib/createBrowserHistory"
import DevTools from "../../utils/dev-tools"
import appReducer from "./../app-reducer"

export default function configureStore(routes, middleware, reducers, initialState = {}) {
  const mergedReducers = merge(
    reducers,
    {
      app: appReducer,
      router: routerStateReducer,
    }
  )
  const rootReducer = combineReducers(mergedReducers)
  const store = buildStore(routes, middleware, rootReducer, initialState)
  return store
}

function buildStore(routes, middleware, rootReducer, initialState) {
  const middlewareToApply = [
    createLogger(),
    thunk,
    ...middleware,
  ]
  return compose(
    reduxReactRouter({routes, createHistory}),
    applyMiddleware(...middlewareToApply),
    DevTools.instrument()
  )(createStore)(rootReducer, initialState)
}
