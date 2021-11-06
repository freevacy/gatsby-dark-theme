module.exports = {
  siteMetadata: {
    title: "freevacy",
    author: "Heri Setiawan",
    description: "Freevacy | Tips menjaga privacy mu didunia maya.",
    siteUrl: "https://freevacy.gatsbyjs.io",
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
    {
    resolve: `gatsby-plugin-mdx`,
    options: {
      extensions: [`.md`, `.mdx`],
    },
    },
    "gatsby-transformer-sharp",
    {
    resolve: `gatsby-plugin-sitemap`,
    options: {
      output: `/sitemap.xml`,
      }
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://freevacy.gatsbyjs.io',
        sitemap: 'https://freevacy.gatsbyjs.io/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
  ],
};
