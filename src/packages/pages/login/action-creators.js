import {
  LOGIN_FORM_UPDATE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  XHR_REQUEST,
} from "../../../constants"

export default {
  loginFormUpdate(payload) {
    return {
      type: LOGIN_FORM_UPDATE,
      payload,
    }
  },
  loginSubmit(body) {
    return {
      type: XHR_REQUEST,
      payload: {
        body,
        path: "/login",
        method: "POST",
        types: [
          LOGIN_REQUEST,
          LOGIN_SUCCESS,
          LOGIN_FAILURE,
        ],
      },
    }
  },
}
