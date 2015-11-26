import React from "react"
import Text from "./text"

export default function PrimaryTitle(props) {
  return (
    <Text {...props}
      className="primary-title"
    >
      {props.children}
    </Text>
  )
}
