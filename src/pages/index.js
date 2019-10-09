import React from 'react'
import { Link } from 'gatsby'
import { Typography } from '@material-ui/core'

export default () => {
	return (
		<>
			<Typography variant='h4' align='center' gutterBottom>
				Homepage in a user's site
			</Typography>

			<Typography variant='body1' align='center' gutterBottom>
				This experiments with removing the toolbar on the home page, and adding
				a form to collect names for MailChimp.
			</Typography>

			<Typography variant='body1' align='center' gutterBottom>
				<Link to='/about'>About</Link> <Link to='/resources'>Resources</Link>
			</Typography>
		</>
	)
}
