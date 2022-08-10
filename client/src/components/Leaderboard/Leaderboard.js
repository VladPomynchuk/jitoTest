import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Wrapper } from './Leaderboard.styled';
import {
  getLeaderboardData,
  getHorseStatusData,
  updateLeaderboardData,
} from 'redux/horseStatusSlice';
import { Typography } from '@mui/material';

const Leaderboard = () => {
  const leaderboardData = useSelector(getLeaderboardData);
  const horseStatusData = useSelector(getHorseStatusData);
  const dispatch = useDispatch();

  useEffect(() => {
    horseStatusData.forEach(element => {
      if (
        element.distance === 1000 &&
        !leaderboardData.includes(element.name)
      ) {
        dispatch(updateLeaderboardData(element.name));
      }
    });
  }, [dispatch, horseStatusData, leaderboardData]);

  return (
    <Wrapper>
      <Typography
        mt={'32px'}
        mb={'20px'}
        align="center"
        variant="h4"
        component="h2"
      >
        Leaderboard
      </Typography>
      <List>
        {leaderboardData.length === 0 ? (
          <Typography align="center" variant="h6" component="p">
            No horse has finished yet. Please wait
          </Typography>
        ) : (
          leaderboardData.map((horseName, index) => (
            <li key={horseName}>
              <Typography align="center" variant="h6" component="p">
                {index + 1}. {horseName}
              </Typography>
            </li>
          ))
        )}
      </List>
    </Wrapper>
  );
};

export default Leaderboard;
