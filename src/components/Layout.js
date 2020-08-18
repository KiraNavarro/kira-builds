import React from "react"
import { Link } from "gatsby"
import Footer from "./Footer"
import { rhythm, scale } from "../utils/typography"
import logo from "../images/logo.png"

class Layout extends React.Component {
render() {
	const { location, title, children, description, miniDesc } = this.props
	const rootPath = `${__PATH_PREFIX__}/`
	let header

	if (location.pathname === rootPath) {
	// ToDo: Mayba move this header to it's own file and import it
	header = (
		<div>
			<Link
			style={{
				boxShadow: `none`,
				textDecoration: `none`,
				color: `inherit`,
			}}
			to={`/`}
			>
				<img src={logo} alt={`${title} ${miniDesc}`}  title={`${title} ${miniDesc}`}/>
			</Link>
		<p>
			{description}
		</p>
		</div>
		
	)
	} else {
	// ToDo: Chage logo on this header for a smaller one
	header = (
		<Link
			style={{
			boxShadow: `none`,
			textDecoration: `none`,
			color: `inherit`,
			}}
			to={`/`}
		>
			<img src={logo} alt={`${title} ${miniDesc}`}  title={`${title} ${miniDesc}`}/>
		</Link>
	)
	}
	return (
	<div
		style={{
		marginLeft: `auto`,
		marginRight: `auto`,
		maxWidth: rhythm(24),
		padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
		}}
	>
		<header>{header}</header>
		<main>{children}</main>
		<Footer />
	</div>
	)
}
}

export default Layout
