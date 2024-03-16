//Library
import React, { useEffect, useState } from 'react';
import { AppBar, Toolbar, Button, IconButton, Container, Box } from '@material-ui/core';
import { Dialog, DialogTitle, DialogActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {scroller } from 'react-scroll';
import { useMediaQuery } from '@material-ui/core';

//Icon
import CloseIcon from '@mui/icons-material/Close';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import VisibilityIcon from '@mui/icons-material/Visibility';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
//Image
import Resume from './../Assests/Resume.pdf';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: "100%",
    zIndex: 1,
    transition: 'background-color 0.3s ease',
    overflow: 'hidden',
  },
  scrolledRoot: {
    backgroundColor: 'white',
    transition: 'background-color 0.3s ease',
  },

  // Laptop Screen
  appBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  // Home Button
  homeButton: {
    color: "white",
  },
  scrolledHome: {
    color: 'black',
  },

  // Link Button
  linkButton: {
    color: 'white',
    border: '2px solid white',
    borderRadius: '5px',
    background: "linear-gradient(to right, white 0%, white 50%, transparent 50%, transparent 100%)",
    backgroundPosition: "100% 0",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s",
    "&:hover": {
      backgroundPosition: "0 0",
      color: "black",
    },
  },
  activeLink: {
    position: 'relative',
    transform: 'translateY(4px) translateX(4px)',
    '&.fallDown::after': {
      width: '100%',
    },
  },
  scrolledButton: {
    color: 'black',
    border: '2px solid black',
    borderRadius: '5px',
    background: "linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%)",
    backgroundPosition: "100% 0",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s",
    "&:hover": {
      backgroundPosition: "0 0",
      color: "white",
    },
  },

  // Link Profile
  profileLinkContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  // Github and Linkedin
  profileLinkButton: {
    color: "white",
    border: '2px solid white',
    padding: "5%",
    "&:hover": {
      backgroundColor: 'white',
      color: 'black',
    },
  },
  scrolledprofileLinkButton: {
    color: 'black',
    border: '2px solid black',
    padding: "5%",
    "&:hover": {
      backgroundColor: 'black',
      color: 'white',
    },
  },

  // Resume
  profileLinkResumeButton: {
    border: "2px solid white",
    color: "white",
    background: "linear-gradient(to right, white 0%, white 50%, transparent 50%, transparent 100%)",
    backgroundPosition: "100% 0",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s",
    "&:hover": {
      backgroundPosition: "0 0",
      color: "black",
    },
  },
  scrolledprofileLinkResumeButton: {
    border: "2px solid black",
    color: "black",
    background: "linear-gradient(to right, black 0%, black 50%, transparent 50%, transparent 100%)",
    backgroundPosition: "100% 0",
    backgroundSize: "200% 100%",
    transition: "background-position 0.5s",
    "&:hover": {
      backgroundPosition: "0 0",
      color: "white",
    },
  },
  closeButton: {
    position: 'absolute',
    top: '8px',
    right: '8px',
  },

  // Small Screen
  rootsmall: {
    display: 'flex',
    flexDirection: 'column',
  },
  appBarsmall: {
    width: '100vw',
    padding: '0.5px',
  },
  showButton: {
    color: 'white',
  },
  infoRow: {
    width: '90vw',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '10px',
  },

}));

const NavBar = () => {
  const classes = useStyles();
  const isLargeScreen = useMediaQuery('(min-width:1024px)');

  // Handle Resume
  const resumeSTR = "Resume 3/16/2024"
  const [openDialog, setOpenDialog] = useState(false);
  const handleResumeOption = () => {
    setOpenDialog(true);
  };
  const handleCloseDialog = () => {
    setOpenDialog(false);
  }
  const handleConfirmDownload = () => {
    const link = document.createElement('a');
    link.href = Resume;
    link.download = 'THIEN_LE_resume.pdf';
    link.click();
  };
  const handleViewResume = () => {
    window.open(Resume, '_blank');
  }

  // Active Scroll
  const [activeLink, setActiveLink] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onUpdateActiveLink = () => {
      // const homeSection = document.getElementById('about');
      const skillsSection = document.getElementById('skills');
      const projectSection = document.getElementById('projects');
      const contactSection = document.getElementById('contact');
      const scrollY = window.scrollY;
      const offset = 100; 

      if (scrollY >= contactSection.offsetTop - offset*2) {
        setActiveLink('contact');
      } else if (scrollY >= projectSection.offsetTop - offset) {
        setActiveLink('projects');
      } else if (scrollY >= skillsSection.offsetTop - offset) {
        setActiveLink('skills');
      } else {
        setActiveLink('about');
      }
    };
    window.addEventListener('scroll', onUpdateActiveLink);
    return () => {
      window.removeEventListener('scroll', onUpdateActiveLink);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    scroller.scrollTo(sectionId, {
      duration: 800,
      delay: 0,
      behavior: 'smooth',
      smooth: 'easeInOutQuart',
      offset: -50,
    });
  };

  // Button visibility for small screen
  const [showButton, setShowButton] = useState(false);
  const handleToggle = () => {
    setShowButton(!showButton);
  };

  return (
  <AppBar position="fixed" className={`${classes.root} ${scrolled ? classes.scrolledRoot : ''}`}>
    {isLargeScreen ? (
      <Toolbar position="static" className={classes.appBar}>
        <Container>
          <IconButton color="inherit" onClick={() => scrollToSection('about')}
            className={`${activeLink === 'about' ? classes.activeLink : ''} ${scrolled ? classes.scrolledHome : classes.homeButton}`}
          >
            <HomeIcon style={{fontSize: '200%'}} />
          </IconButton>
        </Container>
        <Container>
          <Button color="inherit"  onClick={() => scrollToSection('skills')}
            className={`${activeLink === 'skills' ? classes.activeLink : ''} ${scrolled ? classes.scrolledButton : classes.linkButton}`}
          >
            Skill
          </Button>
        </Container>
        
        <Container>
          <Button color="inherit" onClick={() => scrollToSection('projects')}
            className={`${activeLink === 'projects' ? classes.activeLink : ''} ${scrolled ? classes.scrolledButton : classes.linkButton}`}
          >
            Project
          </Button>
        </Container>

        <Container>
          <Button color="inherit" onClick={() => scrollToSection('contact')}
            className={`${activeLink === 'contact' ? classes.activeLink : ''} ${scrolled ? classes.scrolledButton : classes.linkButton}`}
          >
            Contact
          </Button>
        </Container>

        <Container className={classes.profileLinkContainer}>
          <IconButton
              href="https://github.com/thienle210303"
              target="_blank"
              rel="noopener"
              className={`${scrolled ? classes.scrolledprofileLinkButton : classes.profileLinkButton}`}
            >
            <GitHubIcon />
          </IconButton>
        </Container>

        <Container className={classes.profileLinkContainer}>
          <IconButton        
              href= "https://linkedin.com/in/thienle210303"
              target="_blank"
              rel="noopener"
              className={`${scrolled ? classes.scrolledprofileLinkButton : classes.profileLinkButton}`}
            >
            <LinkedInIcon />
          </IconButton>
        </Container>

        <Container className={classes.profileLinkContainer}>
          <Button color='inherit' onClick={handleResumeOption} 
            className={` ${scrolled ? classes.scrolledprofileLinkResumeButton : classes.profileLinkResumeButton}`}
          >
            Resume
          </Button>
          <Dialog open={openDialog}>
            <IconButton aria-label="close" onClick={handleCloseDialog} className={classes.closeButton}>
              <CloseIcon />
            </IconButton>
            <DialogTitle> {resumeSTR} </DialogTitle>
            <DialogActions style={{display:'flex', justifyContent: 'center'}}>
              <IconButton onClick={handleConfirmDownload} color="primary">
                Download
                <FileDownloadIcon/>
              </IconButton>
              <IconButton onClick={handleViewResume} color="primary">
                View
                <VisibilityIcon/>
              </IconButton>
            </DialogActions>
          </Dialog>
        </Container>
      </Toolbar>
    ) : ( // Small Screen
    <Toolbar className={classes.rootsmall}>
      <Toolbar className={classes.appBarsmall}>
        <Container>
          <IconButton color="inherit" onClick={() => scrollToSection('about')}
            className={`${scrolled ? classes.scrolledHome : classes.homeButton}`}
          >
            <HomeIcon style={{fontSize: '150%'}} />
          </IconButton>
        </Container>

        <IconButton className={`${scrolled ? "" : classes.showButton}`} onClick={() => handleToggle()}>
          <MenuIcon/>
        </IconButton>
      </Toolbar>
        {showButton && (
          <Box>
            <Container className={classes.infoRow}>
              <Button color="inherit"  onClick={() => scrollToSection('skills')}
                className={`${scrolled ? classes.scrolledButton : classes.linkButton}`}
              >
                Skill
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('projects')}
                className={`${scrolled ? classes.scrolledButton : classes.linkButton}`}
              >
                Project
              </Button>
              <Button color="inherit" onClick={() => scrollToSection('contact')}
                className={`${scrolled ? classes.scrolledButton : classes.linkButton}`}
              >
                Contact
              </Button>
            </Container>

            <Container className={classes.infoRow}>
              <IconButton
                  href="https://github.com/thienle210303"
                  target="_blank"
                  rel="noopener"
                  className={`${scrolled ? classes.scrolledprofileLinkButton : classes.profileLinkButton}`}
                >
                <GitHubIcon />
              </IconButton>
              <IconButton        
                  href= "https://linkedin.com/in/thienle210303"
                  target="_blank"
                  rel="noopener"
                  className={`${scrolled ? classes.scrolledprofileLinkButton : classes.profileLinkButton}`}
                >
                <LinkedInIcon />
              </IconButton>
              <Button color='inherit' onClick={handleResumeOption} 
                className={` ${scrolled ? classes.scrolledprofileLinkResumeButton : classes.profileLinkResumeButton}`}
              >
                Resume
              </Button>
              <Dialog open={openDialog}>
                <IconButton aria-label="close" onClick={handleCloseDialog} className={classes.closeButton}>
                  <CloseIcon />
                </IconButton>
                <DialogTitle> {resumeSTR} </DialogTitle>
                <DialogActions style={{display:'flex', justifyContent: 'center'}}>
                  <IconButton onClick={handleConfirmDownload} color="primary">
                    Download
                    <FileDownloadIcon/>
                  </IconButton>
                  <IconButton onClick={handleViewResume} color="primary">
                    View
                    <VisibilityIcon/>
                  </IconButton>
                </DialogActions>
              </Dialog>
            </Container>
          </Box>
          )}
    </Toolbar>
    )}
  </AppBar>
  );
};

export default NavBar;