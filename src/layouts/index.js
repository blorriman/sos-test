import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Layout from 'gatsby-theme-bl-simple/src/layouts/index'

import MyTheme from '../utils/myTheme'
import './styles.css'

const theme = MyTheme

export default ({ children, location }) => {
	if (location.pathname === '/') {
		return children
	} else {
		return (
			<StaticQuery
				query={graphql`
					query SiteTitleQuery {
						site {
							siteMetadata {
								title
								author
							}
						}
					}
				`}
				render={data => (
					<Layout
						theme={theme}
						siteTitle={data.site.siteMetadata.title}
						author={data.site.siteMetadata.author}
						location={location}
					>
						{children}
					</Layout>
				)}
			/>
		)
	}
}
