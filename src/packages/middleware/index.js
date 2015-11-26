import initialize from "./initialize"
import apiFactory from "./api"
import xhr from "./../services/xhr"

const API_URL = process.env.REST_URL
const api = apiFactory(xhr, {API_URL})

export default [
  initialize,
  api,
]
