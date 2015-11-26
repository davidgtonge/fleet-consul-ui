import {curry} from "ramda"

export default curry(function initialize({dispatch}, next, action) {
  if (action.type === "APP_START") {
    return
  }
  next(action)
})
