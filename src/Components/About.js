// Library
import { useState, useEffect } from "react";
import { Typography, Container, Box, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { useMediaQuery } from '@material-ui/core';

// Img
import selfNoBack from "../Assests/self_background.png";
import selfBackground from '../Assests/self_background.jpg';
import self from '../Assests/self.jpg';
// Icon
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import SchoolIcon from '@mui/icons-material/School';
import TerminalIcon from '@mui/icons-material/Terminal';
import DeveloperModeIcon from '@mui/icons-material/DeveloperMode';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		backgroundColor: "white",
		margin: 0,
		padding: 0,
		overflow: 'hidden',
		width: "100%",
	},

	// Right side About
	aboutContainer: {
		display: "flex",
    width: "100%",
		paddingTop: theme.spacing(25),
		minHeight: "100%",
		height: "100%",
		background: 'black',
  },
  textContent: {
		display: "flex",
		flexDirection: "column",
		color: "white",
		textShadow: '2px 2px 4px rgba(0, 0, 0, 5)',
		width: "100%",
  },
	welcome: {
		display: "inline-block",
		fontSize: "150%",
		border: "1px solid white",
		paddingLeft: "10px",
		paddingRight: "10px",
		margin: "2% 2% 2% 0px",
	},
	header: {
		fontSize: '350%',
    fontWeight: "bolder",
	},
	sub: {
		fontSize: "100%",
		padding: "10px",
		display: "flex",
	},

  // Left side Image
  imageContent: {
    display: 'flex',
		position: 'relative',
		justifyContent: "center",
		width: "100vw",
		backgroundColor: 'white',
		backgroundImage: `url(${selfBackground})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },
  image: {
		position: 'absolute',
		bottom: 0,
    width: '60%',
    height: '70%',
  },

}));


const About = () => {
	const classes = useStyles();
	const isLargeScreen = useMediaQuery('(min-width:1024px)');

	const [text, setText] = useState("");
	const toRotate = [ "Programmer", "Developer", "Learner", "Web Scraper", "Pioneer"];
	const period = 2000;

	useEffect(() => {
    let loopNum = 0;
    let isDeleting = false;
    let delta = 300 - Math.random() * 100;
    let index = 0;
    let ticker = setInterval(() => {
      const i = loopNum % toRotate.length;
      const fullText = toRotate[i];

      if (isDeleting) {
        setText(fullText.substring(0, index - 1));
        index--;
      } else {
        setText(fullText.substring(0, index + 1));
        index++;
      }

      if (isDeleting && index === 0) {
        loopNum++;
        isDeleting = false;
        delta = 500;
      } else if (!isDeleting && index === fullText.length) {
        isDeleting = true;
        delta = period;
      }
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, []);



	return (
	<Box id="about" className={classes.root}>
		<Box className={classes.aboutContainer}>
			{isLargeScreen ? (
				<Grid container spacing={3}>
					<Grid item xs={12} sm={6} className={classes.textContent}>
						<span style={{paddingLeft: "10%"}}>
							<Typography variant="body1">
								<span  className={classes.welcome}>Welcome to my Portfolio</span>
							</Typography>
							<Typography variant="h4" className={classes.header}>
									Hi, I'm Thien Le, <br/> a {" "}
									<span className="txt-rotate" data-period="1000" data-rotate='${toRotate}'>
										<span>{text}</span>
									</span>
							</Typography>
							<Container>
								<Typography variant="body1" className={classes.sub}>
									<SchoolIcon fontSize="medium" style={{marginRight: "5px"}}/>
									An undergraduate Computer Science from the University of South Carolina, Columbia.
								</Typography>
								<Typography variant="body1" className={classes.sub}>
									<DeveloperModeIcon fontSize="medium" style={{marginRight: "5px"}}/>
									Highly motivated and adaptable, interested in thriving by exploring new technologies.
								</Typography>
								<Typography variant="body1" className={classes.sub}>
									<HistoryEduIcon fontSize="medium" style={{marginRight: "5px"}}/>
									Team experience in software engineering, web development, and web scraping development
								</Typography>
								<Typography variant="body1" className={classes.sub}>
									<TerminalIcon fontSize="medium" style={{marginRight: "5px"}}/>
									Well-equipped to tackle diverse projects.
								</Typography>
							</Container>
						</span>
					</Grid>
						<Grid item xs={12} sm={6} className={classes.imageContent}>
							<img src={selfNoBack} alt="Profile" className={classes.image} />
						</Grid>
				</Grid>
			) : (
				<Box style={{width: "100vw", height:"100%", display: 'flex', flexDirection: 'column'}}>
					<Box style={{color: 'white', padding: '0px 1vw 1vh 1vw', textAlign: 'center'}}>
						<Typography variant="body1">
							<span  className={classes.welcome}>Welcome to my Portfolio</span>
						</Typography>
						<Typography variant="h4" className={classes.header}>
								I'm Thien <br/>
								<span> Le, a <br/> </span>
								<span className="txt-rotate" data-period="1000" data-rotate='${toRotate}'>
									<span>{text}</span>
								</span>
						</Typography>
						<Container style={{width: "90vw"}}>
							<Typography variant="body1" className={classes.sub}>
								<SchoolIcon fontSize="medium" style={{marginRight: "5px"}}/>
								An undergraduate Computer Science from the University of South Carolina, Columbia.
							</Typography>
							<Typography variant="body1" className={classes.sub}>
								<DeveloperModeIcon fontSize="medium" style={{marginRight: "5px"}}/>
								Highly motivated and adaptable, interested in thriving by exploring new technologies.
							</Typography>
							<Typography variant="body1" className={classes.sub}>
								<HistoryEduIcon fontSize="medium" style={{marginRight: "5px"}}/>
								Team experience in software engineering, web development, and web scraping development
							</Typography>
							<Typography variant="body1" className={classes.sub}>
								<TerminalIcon fontSize="medium" style={{marginRight: "5px"}}/>
								Well-equipped to tackle diverse projects.
							</Typography>
						</Container>
					</Box>
					<Box style={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
							<img src={self} alt="Profile" style={{padding: "0px"}}/>
					</Box>
				</Box>
			)}
		</Box>
	</Box>
  );
};


export default About;
