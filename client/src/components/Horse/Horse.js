import { LinearProgress } from '@mui/material';
import React from 'react';
import { HorseImage, Item } from './Horse.styled';
import horseGif from '../../images/horse.gif';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Typography } from '@mui/material';

const Horse = ({ name, distance }) => {
  return (
    <Item>
      <Typography variant="body1" component="p">
        {name}
      </Typography>

      {distance !== 1000 ? (
        <HorseImage src={horseGif} alt="horse" />
      ) : (
        <CheckCircleIcon color="primary" fontSize="large" />
      )}

      <LinearProgress variant="determinate" value={distance * 0.1} />
    </Item>
  );
};

export default Horse;
