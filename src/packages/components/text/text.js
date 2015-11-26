import React from "react"

export default function Text(props) {
  const style = {
    fontSize: props.fontSize,
    color: props.color,
    weight: props.weight,
  }
  return (
    <span
      className = {props.className}
      style = {style}
    >
      {props.children}
    </span>
  )
}
