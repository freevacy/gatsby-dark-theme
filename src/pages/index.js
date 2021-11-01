import * as React from "react"
import { Link } from "gatsby"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Home | Freevacy</title>
      <h1 style={headingStyles}>
        <h1>FREEVACY</h1>
        <br />
        <span style={headingAccentStyles}>— about privacy tips! Coming Soon... </span>
        <span role="img" aria-label="Party popper emojis">
          🎉🎉🎉
        </span>
      </h1>
      <h3>
        <Link to="/404" style={{textDecoration: "none"}}>Error Page</Link>
      </h3>
    </main>
  )
}

export default IndexPage
