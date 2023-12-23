// Library
import React, { useState } from 'react';
import { Card, CardActions, CardContent, CardMedia} from '@material-ui/core';
import {Button, Typography,} from '@material-ui/core';
import  { Dialog, DialogContent, DialogActions} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



const useStyles = makeStyles((theme) => ({
  cardContentStyle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80px',
  },

  projectNameStyle: {
    display: 'block',
    fontSize: '1.2rem', 
    textAlign: 'center', 
    marginTop: 'auto',
    color: 'black',
  },
  cardDescription: {
    marginTop: theme.spacing(3),
    color: 'black',
    padding: '5px',
    border: '2px dashed black',
  },

  detailButtonContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  detailButton: {
    border: '2px solid black'
  },

}));

function ProjectCard({project}) {
  const [open, setOpen] = useState(false);
  const classes = useStyles();

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpenURL = () => {
    window.open(project.link, "_blank");
  };

  return (
    <div>
      <Card style={{height: "100%", boxShadow: '0px 2px 6px rgba(0, 0, 0, 0.5)', }}>
        <CardMedia
          component="img"
          alt={project.name}
          height="150"
          image={project.img}
          title={project.name}
        />
        <CardContent className={classes.cardContentStyle}>
          <Typography gutterBottom variant="h5" component="h2" className={classes.projectNameStyle}>
            {project.name}
          </Typography>
        </CardContent>
        <CardActions className={classes.detailButtonContainer} >
          <Button className={classes.detailButton}  onClick={handleClickOpen}>
            Details
          </Button>
        </CardActions>
      </Card>
      <Dialog open={open}>
        <DialogContent>
          <Typography variant="h4" component="h2" style={{paddingBottom: "10px"}}>
            {project.name}
            <Typography variant="body1" style={{fontStyle: 'italic'}}>
              {project.type}
            </Typography>
          </Typography>
          <CardMedia
            component="img"
            alt={project.name}
            height="auto"
            image={project.img}
            title={project.name}
          />
          <Typography variant="body2" component="p" className={classes.cardDescription}>
            {project.description}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleOpenURL} className={classes.sourceButton}>
            Source Code
          </Button>
          <Button onClick={handleClose} className={classes.closeButton}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ProjectCard;