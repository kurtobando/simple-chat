import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const GlobalHeader = () => {
    return (
        <StaticQuery
            query={graphql`
                query GlobalHeaderQuery {
                    site {
                        siteMetadata {
                            description
                            siteUrl
                            title
                            imagePreview
                        }
                    }
                }
            `}
            render={(data) => (
                <React.Fragment>
                    <Helmet>
                        <title>{data.site.siteMetadata.title}</title>
                        <meta name="description" content={data.site.siteMetadata.description} />
                        <meta property="og:image" content={data.site.siteMetadata.imagePreview} />
                    </Helmet>
                </React.Fragment>
            )}
        />
    )
}

export default GlobalHeader
