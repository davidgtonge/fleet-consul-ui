import React from "react"
import {Route} from "react-router"
import {forEach, map} from "ramda"
import SpinnerWrapper from "../../components/spinner-wrapper"
import PageLayout from "../../components/layout/page"
import guards from "../../services/guards"
import routeSpec from "./spec"

export default applyGuards(guards, PageContent())

function applyGuards(guards, content) {
  let guardedContent = content
  forEach((GuardComponent) => {
    guardedContent = (
      <Route component={GuardComponent}>
        {guardedContent}
      </Route>
    )
  }, guards)

  return guardedContent
}

function bindRoutes(routeSpec) {
  let i = 0
  return map((route) => {
    const RouteController = route.controller
    i++
    return <Route path={route.path} component={RouteController} key={i}/>
  })(routeSpec)
}

function PageContent(props) {
  return (
    <Route component={PageLayout}>
      {bindRoutes(routeSpec)}
    </Route>
  )
}
