import { Stack, TextField, Typography } from '@mui/material';
import { Container } from '@mui/system';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';


export default function CreateGame(props){

    const createGame = () => {
        alert('Nope')
    }

    return(
        <Container>
            <Typography variant="h1" component="div">Creer une Partie</Typography>
            <Stack
                component="form"
                spacing={2}
            >
                <TextField 
                    label="Pseudo"
                    id="standard-size-normal"
                    defaultValue="Pseudo"
                    variant="standard"
                />
                <Typography id="input-slider" gutterBottom>
                    Nombre de Joueurs
                </Typography>
                <Slider label="Nombre de Joueurs" defaultValue={5} min={2} max={10} aria-label="Nombre de Joueurs" valueLabelDisplay="auto" aria-labelledby="input-slider"/>
            </Stack>
            <Button variant="contained" color="success" onClick={createGame}>
                 Generer Partie
            </Button>
        </Container>
    )
}