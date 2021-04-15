/**
 * Footer component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import {
    useStaticQuery,
    graphql,
    Link
} from "gatsby"
import { rhythm } from "../utils/typography"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query FooterQuery {
        site {
            siteMetadata {
            miniDesc
            authorShort
            social {
                instagram
                facebook
            }
            }
        }
        }
    `)

    const { social,miniDesc, authorShort } = data.site.siteMetadata;

    return (
        <footer
            style={{
            display: 'flex',
            marginBottom: rhythm(2.5),
            borderTop: 'solid',
            borderTopColor: '#ccc',
            borderTopWidth: '1px',
            paddingTop: rhythm(1),
            }}
        >
            <p><Link to="hello">Hello </Link></p>
            - © {new Date().getFullYear()}, {authorShort}{miniDesc}
            <a target="_blank" href={`${social.instagram}`} rel="noopener noreferrer" >Instagram</a>
            <a target="_blank" href={`${social.facebook}`} rel="noopener noreferrer" >Facebook</a>
        </footer>
    )
}

export default Footer
