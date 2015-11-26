/* eslint-disable max-nested-callbacks */
import apiMiddlewareFactory from "../api"
import sinon from "sinon"
import sinonAsPromised from "sinon-as-promised"
import {expect} from "chai"

describe("API middleware", function() {

  beforeEach(() => {
    this.mockAction = {
      type: "XHR_REQUEST",
      payload: {
        types: ["TEST_START", "TEST_SUCCESS", "TEST_FAIL"],
        path: "/foo",
        method: "TEST",
      },
    }

    this.mockDispatch = sinon.spy()
  })

  describe("calls next skipping non XHR actions", () => {
    beforeEach(() => {
      const mockXhrService = sinon.stub()
        .resolves("RESPONSE")

      this.mockNext = sinon.spy()

      this.apiMiddleware = apiMiddlewareFactory(
        mockXhrService,
        {API_URL: "http://testurl.com"}
      )({dispatch: this.mockDispatch})

      this.mockAction.type = "NOT_XHR_REQUEST"

      return this.apiMiddleware(this.mockNext, this.mockAction)
    })

    it("call next", () => {
      expect(this.mockNext.calledWith(this.mockAction))
    })

  })

  describe("successful response flow", () => {

    beforeEach(() => {
      const mockXhrService = sinon.stub()
        .resolves("RESPONSE")

      this.apiMiddleware = apiMiddlewareFactory(
        mockXhrService,
        {API_URL: "http://testurl.com"}
      )({dispatch: this.mockDispatch})


      return this.apiMiddleware(() => {}, this.mockAction)
    })

    it("dispatches an action with type TEST_START", () => {
      const mockAction = this.mockAction
      expect(this.mockDispatch.calledWith({
        type: "TEST_START",
        payload: mockAction.payload,
      })).to.equal(true)
    })

    it("dispatches an action with type TEST_SUCCESS", () => {
      expect(this.mockDispatch.calledWith({
        type: "TEST_SUCCESS",
        payload: "RESPONSE",
      })).to.equal(true)
    })
  })


  describe("failed response flow", () => {

    beforeEach(() => {
      const mockXhrService = sinon.stub()
        .rejects("ERROR")

      this.apiMiddleware = apiMiddlewareFactory(
        mockXhrService,
        {API_URL: "http://testurl.com"}
      )({dispatch: this.mockDispatch})

      return this.apiMiddleware(() => {}, this.mockAction)
    })

    it("dispatches an action with type TEST_FAIL", () => {
      const failCallArg = this.mockDispatch.getCall(1).args[0]
      expect(failCallArg.type).to.equal("TEST_FAIL")
    })

  })
})
