let Root
import RootDev from "./env/dev"
import RootProd from "./env/prod"

Root = process.env.NODE_ENV === "PROD" ?
  RootProd :
  RootDev

export default Root
