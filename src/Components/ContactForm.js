import React, { useState, useRef } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

const useStyles = {
  root: {
    flexGrow: 1,
		margin: 0,
		padding: 0,
		overflow: "hidden",
		width: "100%",
		marginTop: '10%',
  },

  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 15% 20px 15%',
    // border: '5px solid black',
  },
  
  textField: {
    marginBottom: '20px',
    padding: '20px',
    zIndex: 1
  },
  
  Button: {
    margin: '10px',
    backgroundColor: 'black',
    color: 'white'
  },

  heading: {
    textAlign: 'center'
  }
};

const ContactForm = () => {
  const [user_name, setFullName] = useState('');
  const [user_email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);
  const [countDown, setCountDown] = useState(null);

  const form = useRef();
  const style = useStyles;

  const isValidEmail = (email) => {
    // Regular expression for validating an Email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const sendEmail = (event) => {
    event.preventDefault();
    // Add your code to connect with the email API and send the form data here
    console.log('Form submitted:', { user_name, user_email, subject, message});
    
    if (!isValidEmail(user_email)) {
      alert("Invalid email address");
      return;
    }

    emailjs.sendForm('service_qdo9pvj', 'template_kc25phs', form.current, 'sAkjjYjTP68g47NiW')
      .then((result) => {
          console.log(result.text);
          alert('Message sent successfully!');
      }, (error) => {
          console.log(error.text);
          alert('Error sending message. Please try again later.');
    });

    setIsButtonDisabled(true);
    setCountDown(30);

    // Update the countdown every second
    const intervalId = setInterval(() => {
      setCountDown((prevCountdown) => {
        if (prevCountdown === 1) {
          // Enable the button when the countdown reaches 1 and clear the interval
          setIsButtonDisabled(false);
          clearInterval(intervalId);
        }
        return prevCountdown - 1;
      });
    }, 1000);

  };

  return (
    <Box id='contact' style={style.root}>
      <Typography variant='h3' style={style.heading}>
        Let's connect!
      </Typography>
      <form style={style.form} onSubmit={sendEmail} ref={form}>
        <TextField
          sx={{mb: 1,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' }}}
          label="Email"
          name="user_email"
          fullWidth
          autoComplete="none"
          className={style.textField}
          value={user_email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <TextField
          sx={{mb: 1, 
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' }}}
          label="Name"
          name="user_name"
          fullWidth
          autoComplete="none"
          className={style.textField}
          value={user_name}
          onChange={(e) => setFullName(e.target.value)}
          required
        />

        <TextField
          sx={{mb: 1,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' }}}
          label="Subject"
          name="subject"
          fullWidth
          autoComplete="none"
          className={style.textField}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          // required
        />

        <TextField
          sx={{mb: 1,
            '& .MuiOutlinedInput-notchedOutline': { borderColor: 'black' } }}
          label="Message"
          name="message"
          fullWidth
          multiline
          rows={5}
          autoComplete="none"
          className={style.textField}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />

        <Button 
            className={style.subButton} 
            type="submit"
            variant="contained" 
            color="primary"
            disabled={isButtonDisabled}
            style={style.Button}
        >
          {isButtonDisabled ? `Submit (${countDown}s)` : 'Submit'}
        </Button>
      </form>
    </Box>
  );
};

export default ContactForm;
