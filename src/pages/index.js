import React from "react"
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/Layout"
import SEO from "../components/seo"
import { rhythm } from "../utils/typography"

class BlogIndex extends React.Component {
render() {
	const { data } = this.props
	const siteTitle = data.site.siteMetadata.title
	const siteDesc = data.site.siteMetadata.description
	const miniDesc = data.site.siteMetadata.miniDesc
	const posts = data.allMarkdownRemark.edges
	

	return (
		<Layout 
			location={this.props.location} 
			title={siteTitle}
			miniDesc={miniDesc}
			description={siteDesc}
		>
		<SEO title="All posts" />
		{posts.map(({ node }) => {
			const title = node.frontmatter.title || node.fields.slug
			const { date, description, featured_image } = node.frontmatter;
			const image = featured_image.childImageSharp.fixed;
			return (
				<article key={node.fields.slug}>
					
				<header>
					
					<h3
					style={{
						marginBottom: rhythm(1 / 4),
					}}
					>
					<Link style={{ boxShadow: `none` }} to={node.fields.slug}>
						{title}
					</Link>
					</h3>
					<small>{date}</small>
				</header>
				<section>
					<p
					dangerouslySetInnerHTML={{
						__html: description || node.excerpt,
					}}
					/>
				</section>
				<Img fixed={image} />
				</article>
			)
		})}
	</Layout>
	)
}
}

export default BlogIndex

export const pageQuery = graphql`
query {
	site {
	siteMetadata {
		title
		description
		miniDesc
	}
	}
	allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
	edges {
		node {
		excerpt
		fields {
			slug
		}
		frontmatter {
			date(formatString: "MMMM DD, YYYY")
			title
			description
			featured_image {
				childImageSharp {
					fixed(width: 125, height: 125) {
					...GatsbyImageSharpFixed
					}
				}
			}
		}
		}
	}
	}
}
`
