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
    "gatsby-plugin-sitemap",
    "gatsby-plugin-robots-txt",
  ],
};
