module.exports = {
	siteMetadata: {
		title: `Save Our Subway Test`,
		description: `Test site for the Save Our Subway campaign`,
		author: `Bob Lorriman`,
		siteUrl: `https://sos.netlify.com/`,
		social: {
			twitter: `@blorriman`
		}
	},
	plugins: [
		'gatsby-plugin-layout',
		`gatsby-plugin-sharp`,
		{
			resolve: `gatsby-plugin-mdx`,
			options: {
				gatsbyRemarkPlugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1035,
							sizeByPixelDensity: true
						}
					}
				]
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				// CommonMark mode (default: true)
				commonmark: true,
				// Footnotes mode (default: true)
				footnotes: true,
				// Pedantic mode (default: true)
				pedantic: true,
				// GitHub Flavored Markdown mode (default: true)
				gfm: true,
				// Plugins configs
				plugins: []
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'posts',
				path: `${__dirname}/src/content/posts/`
			}
		},
		{
			resolve: `gatsby-theme-bl-simple`,
			options: {}
		},
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint:
					'https://gmail.us20.list-manage.com/subscribe/post?u=c15833a6b0097f20cb400d702&amp;id=95298acee8'
			}
		}
	]
}
