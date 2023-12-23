import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const useStyles = (() => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 15% 20px 15%',
    
  },
  textField: {
    marginBottom: '100px',
  },
}));

const ContactForm = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const style = useStyles();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your code to connect with the email API and send the form data here
    console.log('Form submitted:', { fullName, email, message });
  };

  return (
    <form style={style.form} onSubmit={handleSubmit}>
      <TextField
        label="Full Name"
        fullWidth
        autoComplete="none"
        className={style.textField}
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        autoComplete="none"
        className={style.textField}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <TextField
        label="Message"
        fullWidth
        multiline
        rows={5}
        autoComplete="none"
        className={style.textField}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button className={style.subButton} type="submit" variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
