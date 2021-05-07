module.exports = {
    siteMetadata: {
        siteUrl: "https://simple-chat.kurtobando.com",
        title: "Simple Chat",
        description: "A simple chat application powered from GatsbyJS, NodeJS, Mongoose and socket.io",
    },
    plugins: [
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
    ],
}
