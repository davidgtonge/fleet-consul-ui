import {merge} from "ramda"

const defaultHeaders = {
  "Content-type": "application/json; charset=UTF-8",
}

function setDefaultOpts(opts) {
  return {
    ...opts,
    headers: merge(opts.headers, defaultHeaders),
  }
}

export default function xhrService(path, opts) {
  return fetch(path, setDefaultOpts(opts)).then((result) => {
    if (result.ok) {
      return result.json()
    }

    throw new Error("Failed making request")
  })
}
