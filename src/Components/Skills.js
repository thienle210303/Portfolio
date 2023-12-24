// Library
import React from 'react';
import { Typography, Box, List, ListItem, ListItemIcon, ListItemText, LinearProgress} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';
// Icon
import GradeIcon from '@mui/icons-material/Grade';
import {FaJava as Java, FaHtml5 as HTML, FaPython as Python} from 'react-icons/fa';
import C from "../Assests/c-.ico";
import {Javascript} from '@mui/icons-material';
import Mongodb from '../Assests/mongodb.ico';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
		overflow: 'hidden',
		width: "100%",
		height: '100%',
		marginTop: theme.spacing(10),
	},

	skillContainer: {
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		paddingTop: theme.spacing(2),
	},

	skillTitleContainer: {
		borderBottom: "3px solid black",
		marginBottom: theme.spacing(2.5),
		paddingBottom: theme.spacing(2),
		width: '60%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
	skillTitleContainersmall: {
		borderBottom: "3px solid black",
		marginBottom: theme.spacing(2),
		paddingBottom: theme.spacing(2),
		width: '90%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		textAlign: 'center',
	},
	skillTitle: {
    color: theme.palette.common.black,
		fontSize: "350%",
  },
	skillSub: {
		border: '2px solid black',
		borderRadius: '5px',
		padding: '3px',
		backgroundColor: 'black',
		color: 'white',
	},
	skillSubsmall: {
		width: '90vw',
		borderRadius: '5px',
		padding: '3px',
		backgroundColor: 'black',
		color: 'white',
	},

  skillList: {
		border: '5px solid black',
    width: '60%',
    backgroundColor: "black",
		borderRadius: theme.spacing(1),
  },
	skillListsmall: {
		border: '5px solid black',
    width: '90vw',
    backgroundColor: "black",
		borderRadius: theme.spacing(1),
	},
  skillItem: {
    display: 'flex',
    alignItems: 'center',
  },
	skillIcon: {
		color: 'red',
		marginLeft: "5%",
	},
	skillName: {
		flex: 1,
		color: 'white',
		marginRight: "5%",
	},
	skillBullet: {
		color: '#f8f7f2',
		minWidth: theme.spacing(4),
	},
  skillProgress: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
	progressValue: {
    paddingLeft: theme.spacing(1),
    color: "red",
    fontWeight: 'bold',
  },

	iconIMG: {
		width: '17px',
		height: '17px',
	}

}));


const Skills = () => {
	const classes = useStyles();
	const isLargeScreen = useMediaQuery('(min-width:1024px)');

	const languages = [

		{ name: 'Python', icon: <Python />, progress: 95 },
		{ name: 'Java', icon: <Java />, progress: 90 },
		{ name: 'C++', icon: <img src={C} alt="C++" className={classes.iconIMG} />, progress: 80 },
		{ name: 'HTML/CSS', icon: <HTML />, progress: 80 },
		{ name: 'JavaScript / React', icon: <Javascript/>, progress: 80 },
		{ name: 'Mongodb', icon: <img src={Mongodb} alt="Mongodb" className={classes.iconIMG}/>, progress: 60 },
  ];

	return (
    <Box id="skills" className={classes.root} >
			{isLargeScreen ? (
				<Box className={classes.skillContainer}>
					<Box className={classes.skillTitleContainer}>
						<Typography variant="h4" className={classes.skillTitle}>
							Skills
						</Typography>
						<Typography variant="body1" className={classes.skillSub}>
							Languages learned after few years working and studying in the Computer Science field.
							<br/> Highly adaptable, eager, and curious to develop new skills!
						</Typography>
					</Box>
					<List className={classes.skillList}>
						{languages.map((language, index) => (
							<ListItem key={index} className={classes.skillItem}>
								<ListItemIcon className={classes.skillIcon}>
									{language.icon}
								</ListItemIcon>
								<ListItemText primary={language.name} className={classes.skillName}/>
								<ListItemIcon className={classes.skillBullet}>
									<GradeIcon />
								</ListItemIcon>
								<span className={classes.progressValue}>{language.progress}%</span>
								<LinearProgress
									className={classes.skillProgress}
									variant="determinate"
									value={language.progress}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			) : (
				<Box className={classes.skillContainer} >
					<Box className={classes.skillTitleContainersmall}>
						<Typography variant="h4" className={classes.skillTitle}>
							Skills
						</Typography>
						<Typography variant="body1" stype={{width: "90vw", }} className={classes.skillSubsmall}>
								Languages learned after few years working and studying in the Computer Science field.
								<br/> Highly adaptable, eager, and curious to develop new skills!
						</Typography>
					</Box>
					<List className={classes.skillListsmall}>
						{languages.map((language, index) => (
							<ListItem key={index} className={classes.skillItem}>
								<ListItemIcon className={classes.skillIcon}>
									{language.icon}
								</ListItemIcon>
								<ListItemText primary={language.name} className={classes.skillName}/>
								<ListItemIcon className={classes.skillBullet}>
									<GradeIcon />
								</ListItemIcon>
								<span className={classes.progressValue}>{language.progress}%</span>
								<LinearProgress
									className={classes.skillProgress}
									variant="determinate"
									value={language.progress}
								/>
							</ListItem>
						))}
					</List>
				</Box>
			)}
    </Box>
  );
};

export default Skills;