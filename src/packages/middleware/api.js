import {curry} from "ramda"
import {XHR_REQUEST} from "../../constants"

export default function(xhrService, {API_URL}) {

  return curry(function({dispatch}, next, action) {

    /*
      Only process actions that result in making a HTTP
      request.
    */
    if (action.type !== XHR_REQUEST) {
      return next(action)
    }

    const {payload} = action
    const {body, method, path, types} = payload
    const [STARTING, SUCCESS, ERROR] = types

    dispatch({type: STARTING, payload})

    const opts = {
      method,
      body,
    }

    return xhrService(API_URL + path, opts)
      .then((payload) => {
        dispatch({type: SUCCESS, payload})
      })
      .catch((payload) => {
        dispatch({type: ERROR, payload})
      })
  })
}
