import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import {
	Box,
	Container,
	Grid,
	Grow,
	makeStyles,
	Paper,
	TextField,
	Typography
} from '@material-ui/core'

import MyTheme from '../utils/myTheme'

const theme = MyTheme

const useStyles = makeStyles(theme => ({}))

const PageTemplate = ({ data: { mdx } }) => {
	const classes = useStyles({
		font: {
			font: theme.typography.fontFamily
		}
	})
	return (
		<>
			<Typography variant='h4' gutterBottom>
				{mdx.frontmatter.title}
			</Typography>
			<MDXRenderer className={classes.font}>{mdx.body}</MDXRenderer>
		</>
	)
}

export default PageTemplate

export const pageQuery = graphql`
	query BlogPostQuery($id: String) {
		mdx(id: { eq: $id }) {
			id
			body
			frontmatter {
				title
			}
		}
	}
`
