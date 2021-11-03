import * as React from 'react'
import Layout from '../../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { graphql } from 'gatsby'
import { Disqus } from 'gatsby-plugin-disqus';

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  let disqusConfig = {
    url: data.site.siteMetadata.siteURL + data.mdx.slug,
    identifier: data.mdx.id,
    title: data.mdx.frontmatter.title,
  }
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>
        Photo Credit:{" "}
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
      <Disqus
        config={disqusConfig}
    />
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      slug
      id
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    site{
    siteMetadata{
      siteUrl
    }
  }
  }
`

export default BlogPost