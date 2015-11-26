import init from "./app/init"
import middleware from "./packages/middleware"
import reducers from "./packages/reducers"
import routes from "./packages/pages/routes"
import initializer from "./packages/action-creators/initialize"

init(routes, middleware, reducers).dispatch(initializer)
