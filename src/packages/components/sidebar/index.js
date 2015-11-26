import React from "react"
import {Link} from "react-router"
import {ListGroup, ListGroupItem} from "react-bootstrap/lib"
import SidebarControls from "./controls"
import {map} from "ramda"

function collectLinks(routeSpec = []) {
  let i = 0
  return map((route) => {
    i++
    return (
      <li key={i} className="sidebar-container__item">
        <Link
          className="sidebar-container__link"
          to={route.path}>{route.linkText}
        </Link>
      </li>
    )

  }, routeSpec)
}

export default function Sidebar(props) {
  return (
    <div className="sidebar-container">
      <SidebarControls />
      <div className="sidebar-container__content">
        <ul className="sidebar-container__list">
          {collectLinks(props.routes)}
        </ul>
      </div>
    </div>
  )
}
