import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout"
import SEO from "../components/seo"

class Hello extends React.Component {
    render() {
        const { data } = this.props;
        const { social, siteTitle } = data.site.siteMetadata;

        return (
        <Layout location={this.props.location} title={siteTitle}>
            <SEO title="Hello" />
            <h1>Hello I'm Jessica!</h1>
            <h3>In my spare time I'm a maker based in Mexico city.</h3>
            <p>I like to make all sort of things but mostly props and scratch built models and recently I've being intrested on making small props for action figures and some dioramas.</p>
            <p>If you want to know what I'm up to you can follow me here:</p>
            <a target="_blank" href={`${social.instagram}`} rel="noopener noreferrer" >Instagram</a><br></br>
            <a target="_blank" href={`${social.facebook}`} rel="noopener noreferrer" >Facebook</a>
        </Layout>
        )
    }
}

export default Hello

export const pageQuery = graphql`
    query {
        site {
        siteMetadata {
            title,
            social {
                facebook,
                instagram,
            }
        }
        }
    }
`
