import React from "react"
import netlifyIdentity from "netlify-identity-widget"

if (netlifyIdentity) {
  netlifyIdentity.on("init", user => {
    if (!user) {
      netlifyIdentity.on("login", () => {
        document.location.href = "/admin/";
      });
    }
  });
}
export default function Home() {
  return <div>Hello world!</div>
}

