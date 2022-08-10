import { Button, Container } from '@mui/material';
import HorseStatus from 'views/HorseStatus';
import useSubscribeHorseStatus from 'hooks/useSubscribeHorseStatus';
import Home from 'views/Home';
import { Box, Section } from 'App.styled';

function App() {
  const { isStart, handleToggleIsStart } = useSubscribeHorseStatus();

  return (
    <Container>
      <Section>
        <Box>
          <Button variant="contained" onClick={handleToggleIsStart}>
            {!isStart ? 'start' : 'reset'}
          </Button>
        </Box>
        {isStart ? <HorseStatus /> : <Home />}
      </Section>
    </Container>
  );
}

export default App;
