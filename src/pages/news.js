/* eslint-disable */
import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'

import MyTheme from '../utils/myTheme'
import SubscribeForm from '../components/subscribeForm'

const theme = MyTheme

const useStyles = makeStyles(theme => ({}))

const News = () => {
	const classes = useStyles()
	return (
		<>
			<Typography variant='h4' gutterBottom>
				Breaking News
			</Typography>

			<Typography variant='body1' color='textPrimary' gutterBottom>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam velit
				explicabo aspernatur ea! Sequi veniam, laudantium minus eaque repellat
				deleniti saepe deserunt veritatis omnis impedit. Voluptas aperiam
				maiores similique sed?
			</Typography>

			<SubscribeForm />
		</>
	)
}

export default News
