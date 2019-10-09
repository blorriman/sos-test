/* eslint-disable */
import React, { useState } from 'react'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import Icon from '@mdi/react'
import {
	mdiHome,
	mdiLibrary,
	mdiInformationVariant,
	mdiInformation,
	mdiMaterialUi,
	mdiWeb,
	mdiEmoticonDead,
	mdiCashUsd,
	mdiAccountQuestion
} from '@mdi/js'
import {
	Box,
	Collapse,
	Container,
	Divider,
	Grid,
	Hidden,
	List,
	ListSubheader,
	ListItem,
	ListItemIcon,
	ListItemText,
	makeStyles,
	Typography
} from '@material-ui/core'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { blue, cyan, deepPurple, grey, purple } from '@material-ui/core/colors'

const useStyles = makeStyles(theme => ({
	root: {
		width: '100%',
		marginLeft: theme.spacing(-1)
	},
	nested: {
		paddingLeft: theme.spacing(4)
	},
	link: { textDecoration: 'none', color: grey[700] }
}))

const SideNav = ({ pathname, handleDrawerClose }) => {
	const classes = useStyles()
	const [open, setOpen] = React.useState(false)

	return (
		<>
			<List
				component='nav'
				aria-labelledby='nested-list-subheader'
				className={classes.root}
			>
				{pathname !== '/' && (
					<>
						<Link to='/' className={classes.link} onClick={handleDrawerClose}>
							<ListItem button divider>
								<ListItemIcon>
									<Icon
										path={mdiHome}
										title='Home'
										size={1.5}
										color={grey[500]}
									/>
								</ListItemIcon>
								<ListItemText primary='Home' />
							</ListItem>
						</Link>
					</>
				)}

				{pathname !== '/about' && (
					<Link
						to='/about'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiInformation}
									title='About'
									size={1.5}
									color={grey[500]}
								/>
							</ListItemIcon>
							<ListItemText primary='About' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/news' && (
					<Link to='/news' className={classes.link} onClick={handleDrawerClose}>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiLibrary}
									title='news'
									size={1.5}
									color={grey[500]}
								/>
							</ListItemIcon>
							<ListItemText primary='News' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/privatization' && (
					<Link
						to='/privatization'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiCashUsd}
									title='Privatization'
									size={1.5}
									color={grey[500]}
								/>
							</ListItemIcon>
							<ListItemText primary='Privatization' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/threat' && (
					<Link
						to='/threat'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiEmoticonDead}
									title='threat'
									size={1.5}
									color={grey[500]}
								/>
							</ListItemIcon>
							<ListItemText primary='The Threat' />
						</ListItem>
					</Link>
				)}

				{pathname !== '/contact' && (
					<Link
						to='/contact'
						className={classes.link}
						onClick={handleDrawerClose}
					>
						<ListItem button divider>
							<ListItemIcon>
								<Icon
									path={mdiAccountQuestion}
									title='contact'
									size={1.5}
									color={grey[500]}
								/>
							</ListItemIcon>
							<ListItemText primary='Contact Us' />
						</ListItem>
					</Link>
				)}
			</List>
		</>
	)
}

export default SideNav
