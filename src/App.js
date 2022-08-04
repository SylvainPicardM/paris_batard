import './App.css';
import { Container } from '@mui/system';
import { Button, ButtonGroup, Typography } from '@mui/material';

function App() {
  return (
    <div className="App">
      <Container>
        <Typography variant="h1" component="div">Paris Batard</Typography>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={() => {window.location="/create_game"}}>Creer Partie</Button>
          <Button onClick={() => {window.location="/join_game"}}>Rejoindre Partie</Button>
        </ButtonGroup>
      </Container>
    </div>
  );
}

export default App;
