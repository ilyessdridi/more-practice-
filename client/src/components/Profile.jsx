
import React from 'react';
import { Avatar, Typography, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
  },
  avatar: {
    marginRight: theme.spacing(2),
  },
}));

const UserProfile = ({ name, email, imageUrl }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Avatar className={classes.avatar} alt={name} src={imageUrl} />
      <div>
        <Typography variant="h6">{name}</Typography>
        <Typography variant="body2">{email}</Typography>
      </div>
    </div>
  );
};

export default UserProfile;