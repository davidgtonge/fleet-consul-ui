let store
import storeDev from "./env/dev"
import storeProd from "./env/prod"

store = process.env.NODE_ENV === "PROD" ?
  storeProd :
  storeDev

export default store
