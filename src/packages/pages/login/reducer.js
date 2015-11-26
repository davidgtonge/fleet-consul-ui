import {merge} from "ramda"
import {
  LOGIN_FORM_UPDATE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from "../../../constants"

const initialState = {
  form: {
    isFetching: false,
  },
}

export default function login(state = initialState, action) {
  const formState = state.form || {}

  switch (action.type) {
  case LOGIN_REQUEST:
    return {
      ...state,
      form: merge(formState, {isFetching: true}),
    }
  case LOGIN_SUCCESS:
    return {
      ...state,
      form: {isFetching: false},
    }
  case LOGIN_FAILURE:
    return {
      ...state,
      form: merge(formState, {isFetching: false}),
    }
  case LOGIN_FORM_UPDATE:
    return {
      ...state,
      form: merge(formState, action.payload),
    }
  default:
    return state
  }
}
