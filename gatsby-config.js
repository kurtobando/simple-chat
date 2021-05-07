// https://www.gatsbyjs.com/docs/how-to/local-development/environment-variables/#server-side-nodejs
require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

const GATSBY_HOTJAR_ID = process.env.GATSBY_HOTJAR_ID
const GATSBY_HOTJAR_VERSION = process.env.GATSBY_HOTJAR_VERSION
const GATSBY_GOOGLE_ANALYTICS_ID = process.env.GATSBY_GOOGLE_ANALYTICS_ID
const GATSBY_SITE_URL = process.env.GATSBY_SITE_URL
const GATSBY_SITE_TITLE = process.env.GATSBY_SITE_TITLE
const GATSBY_SITE_DESCRIPTION = process.env.GATSBY_SITE_DESCRIPTION

module.exports = {
    siteMetadata: {
        siteUrl: GATSBY_SITE_URL,
        title: GATSBY_SITE_TITLE,
        description: GATSBY_SITE_DESCRIPTION,
    },
    plugins: [
        {
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: GATSBY_GOOGLE_ANALYTICS_ID,
                head: false,
            },
        },
        "gatsby-plugin-sass",
        "gatsby-plugin-image",
        "gatsby-plugin-react-helmet",
        "gatsby-plugin-sitemap",
        "gatsby-plugin-react-helmet",
        {
            resolve: "gatsby-plugin-manifest",
            options: {
                icon: "src/images/icon.png",
            },
        },
        "gatsby-plugin-sharp",
        "gatsby-transformer-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
                name: "images",
                path: "./src/images/",
            },
            __key: "images",
        },
        {
            resolve: "gatsby-plugin-htaccess",
            options: {
                RewriteBase: "/",
                https: true,
            },
        },
        {
            resolve: `gatsby-plugin-hotjar`,
            options: {
                includeInDevelopment: true,
                id: GATSBY_HOTJAR_ID,
                sv: GATSBY_HOTJAR_VERSION,
            },
        },
    ],
}
