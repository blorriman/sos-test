/* eslint-disable */
import React, { useState } from 'react'
import { Link } from 'gatsby'
import { Box, Container, Grid, makeStyles, Typography } from '@material-ui/core'

const useStyles = makeStyles(theme => ({}))

const Contact = () => {
	const classes = useStyles()
	return (
		<>
			<Typography variant='h4' gutterBottom>
				Contact Us
			</Typography>

			<Typography variant='body1' color='textPrimary' gutterBottom>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
				doloribus delectus eligendi ipsa voluptates impedit ipsam enim ut
				explicabo, recusandae nam iusto atque eum nobis fugit dicta commodi,
				tempora fugiat?
			</Typography>
		</>
	)
}

export default Contact
