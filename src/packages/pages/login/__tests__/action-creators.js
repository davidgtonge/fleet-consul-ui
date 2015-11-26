import {expect} from "chai"
import {keys} from "ramda"
import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_FORM_UPDATE,
  XHR_REQUEST,
} from "../../../../constants"

import {
  loginFormUpdate,
  loginSubmit,
} from "../action-creators"


describe("login action-creators", () => {

  describe("LOGIN_FORM_UPDATE", function() {
    beforeEach(() => {
      this.payload = {
        email: "test",
      }
      this.action = loginFormUpdate(this.payload)
    })

    it("creates an action", () => {
      expect(this.action.type).to.eql(LOGIN_FORM_UPDATE)
    })

    it("creates an action with a payload", () => {
      expect(this.action.payload).to.eql(this.payload)
    })
  })

  describe("login XHR_REQUEST", function() {

    beforeEach(() => {
      this.testTypes = [
        LOGIN_REQUEST,
        LOGIN_SUCCESS,
        LOGIN_FAILURE,
      ]
      this.body = {
        email: "email",
        password: "password",
      }
      this.action = loginSubmit(this.body)
    })

    it("creates an action", () => {
      expect(this.action.type).to.eql(XHR_REQUEST)
    })

    it("creates an action with an array of sub types in the payload", () => {
      expect(this.action.payload.types).to.eql(this.testTypes)
    })

    it("creates an action with the original body in the payload", () => {
      expect(this.action.payload.body).to.eql(this.body)
    })

    it("creates an action with method of POST in the payload", () => {
      expect(this.action.payload.method).to.eql("POST")
    })

    it("creates an action with a path of /login in the payload", () => {
      expect(this.action.payload.path).to.eql("/login")
    })

  })

})
