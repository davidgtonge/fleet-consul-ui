import React from "react"
import {connect} from "react-redux"
import {path} from "ramda"
import {Navbar, Grid, Row, Col} from "react-bootstrap/lib"
import Page from "./../page"
import Sidebar from "./../sidebar"
import Brand from "./../brand"
import theme from "./../../../styles/index.scss"

function mapStateToProps(state) {
  const page = path(["router", "location", "pathname"], state) || "/"
  return {page}
}

function Layout(props) {
  return (
    <div>
      <div  className="two-column-container">
        <Sidebar />
        <Page>
          <Navbar fluid={true}>
            <Brand />
          </Navbar>
          <div className="content">
            {props.children}
          </div>
        </Page>
      </div>
    </div>
  )
}

export default connect(mapStateToProps)(Layout)
