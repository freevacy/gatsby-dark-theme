import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  siteTitle
} from './layout.module.css'
import ToggleMode from './toggler'

const Layout = (props) => {
  const pageTitle = props.pageTitle
  const children = props.children
  //ini teh pagetitle children teh props
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={siteTitle}>{data.site.siteMetadata.title}</header>
      <ToggleMode />
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

export default Layout