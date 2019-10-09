/* eslint-disable */
import React, { useState } from 'react'
import { StaticQuery, graphql } from 'gatsby'
import addToMailchimp from 'gatsby-plugin-mailchimp'
import {
	Backdrop,
	Box,
	Button,
	Container,
	Fade,
	Grid,
	makeStyles,
	Modal,
	Paper,
	TextField,
	Typography
} from '@material-ui/core'
import { green, red } from '@material-ui/core/colors'

import MyTheme from '../utils/myTheme'
import useForm from '../utils/useForm'
import { validateSubscribe } from '../utils/validation'

const theme = MyTheme

const useStyles = makeStyles(theme => ({
	main: {
		margin: theme.spacing(2)
		// marginTop: theme.spacing(2),
		// marginBottom: theme.spacing(2)
	},
	modal: {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'center'
	},
	paper: {
		backgroundColor: theme.palette.background.paper,
		// border: '2px solid #000',
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3)
	},
	button: {
		margin: theme.spacing(1),
		marginTop: theme.spacing(5),
		color: 'white'
	},
	spacer: {
		marginTop: theme.spacing(1)
	},
	typeColor: { color: 'white' }
}))

const SubscribeForm = () => {
	const classes = useStyles()
	const [result, setResult] = useState('')
	const [message, setMessage] = useState('')
	const [open, setOpen] = React.useState(false)

	const validate = validateSubscribe
	const { handleChange, handleSubmit, values, errors } = useForm(
		submit,
		validate
	)

	const handleOpen = () => {
		setOpen(true)
	}

	const handleClose = () => {
		setOpen(false)
	}

	function submit() {
		const name = values.name.split(' ')
		addToMailchimp(values.email, {
			FNAME: name[0],
			LNAME: name[1]
		}).then(data => {
			console.log(data.msg)
			setResult(data.result)
			setMessage(data.msg)
		})
	}

	const subscribeForm = (
		<form id='subscribe-form' onSubmit={handleSubmit} noValidate>
			<TextField
				id='register-name'
				required
				autoFocus={true}
				onChange={handleChange}
				label='Name'
				error={errors.name}
				type='type'
				name='name'
				value={values.name}
				margin='normal'
				fullWidth={true}
			/>

			<TextField
				id='subscribe-email'
				required
				// autoFocus={true}
				onChange={handleChange}
				label='Email'
				error={errors.email}
				type='email'
				name='email'
				autoComplete='email'
				value={values.email}
				margin='normal'
				fullWidth={true}
			/>

			<Button
				variant='contained'
				size='large'
				fullWidth={true}
				color='primary'
				className={classes.button}
				style={{ color: 'white' }}
				onClick={handleSubmit}
			>
				Subscribe
			</Button>
		</form>
	)

	const response = () => {
		if (result === 'success') {
			return (
				<div style={{ backgroundColor: green[500], padding: 20 }}>
					<Typography
						variant='body1'
						color='primary'
						align='center'
						gutterBottom
						className={classes.typeColor}
					>
						{message}
					</Typography>
				</div>
			)
		} else {
			return (
				<div style={{ backgroundColor: red[500], padding: 20 }}>
					<Typography
						variant='body1'
						color='primary'
						align='center'
						gutterBottom
						className={classes.typeColor}
					>
						<span dangerouslySetInnerHTML={{ __html: message }} />
					</Typography>
				</div>
			)
		}
	}

	return (
		<>
			<Grid container justify='center' spacing={2}>
				<Button
					variant='contained'
					color='primary'
					size='large'
					className={classes.button}
					onClick={handleOpen}
				>
					Keep me Informed!
				</Button>

				<Modal
					aria-labelledby='transition-modal-title'
					aria-describedby='transition-modal-description'
					className={classes.modal}
					open={open}
					onClose={handleClose}
					closeAfterTransition
					BackdropComponent={Backdrop}
					BackdropProps={{
						timeout: 500
					}}
				>
					<Fade in={open}>
						<div className={classes.paper}>
							{/* <Grid item xs={12} sm={8}> */}
							{/* <Paper className={classes.paper}> */}
							<Typography variant='h4' gutterBottom>
								Subscribe
							</Typography>

							{!result ? subscribeForm : response()}
							{/* </Paper> */}
							{/* </Grid> */}
						</div>
					</Fade>
				</Modal>
			</Grid>
		</>
	)
}

export default SubscribeForm
