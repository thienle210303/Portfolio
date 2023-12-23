// Library
import React, { useEffect, useState } from 'react';
import { Typography, Box, IconButton} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// Icon
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import PlaceIcon from '@mui/icons-material/Place';


const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
		overflowX: "hidden",
		width: "100%",
		height: "400px",
		marginTop: theme.spacing(10),
	},

	contactContainer: {
		width: '100%',
		display: 'flex',
		flexDirection: 'column',
    alignItems: 'center',
		alignContent: 'center',
	},

	title: {
		fontSize: '250%',
		marginBottom: theme.spacing(5),
	},

	informationContainer: {
		width: '45%',
		border: '2px solid black',
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: 'black',
		color: 'white',
	},
	informationContainersmall: {
		width: '90%',
		border: '2px solid black',
		padding: theme.spacing(2),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		alignContent: 'center',
		backgroundColor: 'black',
		color: 'white',
	},

	header: {
		fontSize: '20px',
		paddingRight: theme.spacing(1),
	},

	informationLine: {
		display: 'flex',
		alignItems: 'center',
		padding: '3px',
	},

	after: {
		width: '45%',
		marginTop: theme.spacing(5),
		borderTop: '2px solid black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},
	aftersmall: {
		width: '90%',
		marginTop: theme.spacing(5),
		borderTop: '2px solid black',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		padding: theme.spacing(2),
	},

	emailIcon: {
    paddingLeft: theme.spacing(2),
    cursor: 'pointer',
		color: 'white',
  },

}));


const Contact = () => {
	const classes = useStyles();
	const isLargeScreen = useMediaQuery('(min-width:1024px)');

	const phoneNumber = "(864) - 603 - 0817";
	const email = "thienle210303@example.com";
	const homeaddress = "109 Crowned Eagle Dr, Taylors, SC"
	const handleEmailIconClick = () => {
    window.open(`mailto:${email}`);
  };
	return (
    <Box className={classes.root} id="contact">
			{isLargeScreen ? (
				<Box className={classes.contactContainer}>
					<Typography variant="h4" className={classes.title}>
						Get in touch !
					</Typography>
					<Box className={classes.informationContainer}>
						<Box className={classes.informationLine}>
							<PhoneIcon style={{paddingRight:'10px'}}/>
							<Typography variant="body1">{phoneNumber}</Typography>
						</Box>
						<Box className={classes.informationLine}>
							<IconButton
								className={classes.emailIcon}
								onClick={handleEmailIconClick}
							>
								<EmailIcon/>
							</IconButton>
							<Typography variant="body1">{email}</Typography>
						</Box>
						<Box className={classes.informationLine}>
							<PlaceIcon style={{paddingRight:'10px',}}/>
							<Typography variant="body1">{homeaddress}</Typography>
						</Box>
					</Box>
					<Box className={classes.after}>
						<Typography varient="h4" style={{fontSize:'200%'}}>
							Thank You
						</Typography>
						<Typography varient="h4" style={{fontSize:'150%'}}>
							Looking Forward from Your Contact!
						</Typography>
					</Box>
				</Box>
			) : (
				<Box className={classes.contactContainer}>
					<Typography variant="h4" className={classes.title}>
						Get in touch !
					</Typography>
					<Box className={classes.informationContainersmall}>
						<Box className={classes.informationLine}>
							<PhoneIcon style={{paddingRight:'10px'}}/>
							<Typography variant="body1">{phoneNumber}</Typography>
						</Box>
						<Box className={classes.informationLine}>
							<IconButton
								className={classes.emailIcon}
								onClick={handleEmailIconClick}
							>
								<EmailIcon/>
							</IconButton>
							<Typography variant="body1">{email}</Typography>
						</Box>
						<Box className={classes.informationLine}>
							<PlaceIcon style={{paddingRight:'10px',}}/>
							<Typography variant="body1">{homeaddress}</Typography>
						</Box>
					</Box>
					<Box className={classes.aftersmall}>
						<Typography varient="h4" style={{fontSize:'160%'}}>
							Thank You
						</Typography>
						<Typography varient="h4" style={{fontSize:'120%'}}>
							Looking Forward from Your Contact!
						</Typography>
					</Box>
				</Box>
			)}
		</Box>
  );
};

export default Contact;