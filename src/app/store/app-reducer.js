import {merge} from "ramda"

const initialState = {
  initialized: false,
}

export default function app(state = initialState, action) {
  if (action.type === "INITIALIZE") {
    return merge(state, {initialized: true})
  }
  return state
}
