import React from "react"
import netlifyIdentity from 'netlify-identity-widget'

netlifyIdentity.init()
export default function Home() {
  return <div>Hello world!</div>
}

