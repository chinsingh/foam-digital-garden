module.exports = {
  pathPrefix: "/notes",
  plugins: [
    {
      resolve: `gatsby-theme-garden`,
      options: {
        contentPath: `${__dirname}/notes`,
        rootNote: `/index`,
      },
    },
  ],
  siteMetadata: {
    title: `chinotes`,
  },
}
