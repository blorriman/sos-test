/* eslint-disable */
import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
	Box,
	Container,
	Grid,
	Grow,
	makeStyles,
	TextField,
	Typography
} from '@material-ui/core'

import MyTheme from '../utils/myTheme'
import SubscribeForm from '../components/subscribeForm'

const theme = MyTheme

const useStyles = makeStyles(theme => ({}))

const About = () => {
	const classes = useStyles({
		error: {
			color: theme.palette.error.main
		}
	})

	return (
		<>
			<Typography variant='h4' gutterBottom>
				About the Save Our Subway Campaign
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

export default About
