// Library
import React from 'react';
import { Typography, Box, Grid} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Carousel } from 'react-responsive-carousel';
import ProjectCard from './ProjectCard';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { useMediaQuery } from '@material-ui/core';

//Image for project
import foodroute from '../Assests/FoodRoute.gif';
import comesoon from '../Assests/coomingsoon.jpg';
import toy from '../Assests/Toys.gif';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
		margin: 0,
		padding: 0,
		overflow: "hidden",
		width: "100%",
		height: '100%',
		marginTop: theme.spacing(10),
	},
	projectContainer: {
		paddingTop: theme.spacing(2),
		paddingBottom: theme.spacing(6),
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: 'black',
	},

	header: {
		color: theme.palette.common.white,
		fontSize: "350%",
		padding: "3px",
		paddingBottom: theme.spacing(2),
		textShadow: '0px 0px 4px rgba(0, 0, 0, 5)',
		position: 'relative',
		display: 'inline-block',
		background: 'black',
	},

	carouselContainer: {
		width: '60%',
		border: '5px solid white',
		borderRadius: '50px',
		backgroundColor: 'white',
	},

	carouselItem: {
		display: 'flex',
    width: 'calc(100% - 40px)', // Adjust width to account for margins
    margin: '0 20px', 
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    justifyContent: 'space-between',
    align: 'center',
		color: 'black',
	},

	carouselItemsmall: {
		display: 'flex',
		alignContent: 'center',
		justifyContent: 'center',
    align: 'center',
		color: 'black',
    width: "100%",
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
  
	}
	
}));


const Skills = () => {
	const classes = useStyles();
	const isLargeScreen = useMediaQuery('(min-width:1024px)');
	// Project set up
	const projects = [
		{
			id: 1,
      name: 'Food Route',
      type: 'Hackathon - 2nd place',
      description: 'Team of 8 member created a technology solution for non-profits organization, improving food distribution to rural areas. With our web app and pooling algorithm, we optimized deliveries. OpenLayer Map showed user locations and nearby food options. The user interface, designed with Chakra UI, enhanced the overall experience. We made a tangible impact on equitable food distribution.',
      img: foodroute,
      link: 'https://github.com/mellieho9/MSCodeToGive2023Project',
    },
		{
			id: 2,
      name: 'Toy Ecommerce',
      type: 'Private - Stopped',
      description: 'Team of 3 member created an e-commerce website dedicated to selling toys.',
      img: toy,
      link: 'https://thienle210303.github.io/Portfolio/',
    },
		{
			id: 3,
      name: 'Coming Soon',
      type: '',
      description: 'Coming Soon.',
      img: comesoon,
      link: 'https://example.com',
    },
	]

	// carousel for large screen
	const chunkedProducts = [];
  const chunkSize = 3;
  for (let i = 0; i < projects.length; i += chunkSize) {
    chunkedProducts.push(projects.slice(i, i + chunkSize));
  }

	// carousel for large screen
	const chunkedProductsmall = [];
  const chunkSizesmall = 1;
  for (let i = 0; i < projects.length; i += chunkSizesmall) {
    chunkedProductsmall.push(projects.slice(i, i + chunkSizesmall));
  }


	return (
    <Box className={classes.root} id="projects">
			<Box className={classes.projectContainer}>
				<Typography variant='h4' className={classes.header}>
					Projects
				</Typography>
				{isLargeScreen ? (
					<Box className={classes.carouselContainer} >
						<Carousel
						showThumbs={false}
						infiniteLoop showIndicators={false} showStatus={false}
						useKeyboardArrows
						autoPlay
						stopOnHover
						swipeable
						>
							{chunkedProducts.map((projectChunk, index) => (
								<Grid container className={classes.carouselItem} key={index}>
									{projectChunk.map(project => (
										<Grid item xs={12} sm={6} md={3} key={project.id}>
											<ProjectCard project={project} />
										</Grid>
									))}
								</Grid>
							))}
						</Carousel>
					</Box>
				) : (
					<Box className={classes.carouselContainer} >
						<Carousel
						showThumbs={false}
						infiniteLoop showIndicators={false} showStatus={false}
						useKeyboardArrows showArrows={true}
						autoPlay
						stopOnHover
						swipeable
						>
							{chunkedProductsmall.map((projectChunk, index) => (
								<Grid container className={classes.carouselItemsmall} key={index}>
									{projectChunk.map(project => (
										<Grid item xs={12} sm={6} md={3} key={project.id}>
											<ProjectCard project={project} />
										</Grid>
									))}
								</Grid>
							))}
						</Carousel>
					</Box>
				)}
			</Box>
    </Box>
  );
};

export default Skills;