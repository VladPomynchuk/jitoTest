import React from 'react';
import { Box } from './HorseStatus.styled';
import Leaderboard from 'components/Leaderboard';
import RaceList from 'components/RaceList';

const HorseStatus = () => {
  return (
    <div>
      <Box>
        <Leaderboard />
        <RaceList />
      </Box>
    </div>
  );
};

export default HorseStatus;
