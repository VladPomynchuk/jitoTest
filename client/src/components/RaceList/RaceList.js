import { Box, List } from './RaceList.styled';
import Horse from 'components/Horse';
import { useSelector } from 'react-redux';
import { getHorseStatusData } from 'redux/horseStatusSlice';
import { Typography } from '@mui/material';

const RaceList = () => {
  const data = useSelector(getHorseStatusData);

  return (
    <Box>
      <Typography
        mt={'32px'}
        mb={'20px'}
        align="center"
        variant="h4"
        component="h2"
      >
        Race progress
      </Typography>
      <List>
        {data.map(({ name, distance }) => (
          <Horse key={name} name={name} distance={distance} />
        ))}
      </List>
    </Box>
  );
};

export default RaceList;
