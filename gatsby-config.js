module.exports = {
  siteMetadata: {
    siteUrl: "https://freevacy.gatsbyjs.io",
    title: "freevacy",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/assets/blog`,
      }
    },
    "gatsby-plugin-mdx",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `freevacy`
      }
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://freevacy.gatsbyjs.io`,
        stripQueryString: true,
      },
    },
  ],
};
