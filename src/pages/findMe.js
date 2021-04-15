import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

class FindMe extends React.Component {
    render() {
        const { data } = this.props;
		const {
			social,
			title,
			miniDesc,
			siteUrl
		} = data.site.siteMetadata;

        return (
        <Layout
            location={this.props.location}
            title={title}
            miniDesc={miniDesc}
        >
            <Seo title="Find Me" />
            <h1>Find Me</h1>
            <a target="_blank" href={`${siteUrl}`} rel="noopener noreferrer" >Website</a><br></br>
            <a target="_blank" href={`${social.instagram}`} rel="noopener noreferrer" >Instagram</a><br></br>
            <a target="_blank" href={`${social.facebook}`} rel="noopener noreferrer" >Facebook</a>
        </Layout>
        )
    }
}

export default FindMe

export const pageQuery = graphql`
    query {
        site {
        siteMetadata {
            title,
            miniDesc,
            siteUrl,
            social {
                facebook,
                instagram,
            }
        }
        }
    }
`
