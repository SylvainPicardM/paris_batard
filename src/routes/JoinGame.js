import { Stack, TextField, Typography, Button } from '@mui/material';
import { Container } from '@mui/system';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import React, { useState } from 'react';

export default function JoinGame(props){
    const [role, setRole] = useState('Joueur');

    const handleRoleChange = (e) => {
        setRole(e.target.value)
    }
    
    const joinGame = () => {
        alert('LOL')
    }

    return(
        <Container>
            <Typography variant="h1" component="div">Rejoindre une Partie</Typography>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                <Select
                    labelId="role-select-label"
                    id="role-select"
                    value={role}
                    label="Role"
                    onChange={handleRoleChange}
                >
                    <MenuItem value={"Joueur"}>Joueur</MenuItem>
                    <MenuItem value={"Spectateur"}>Spectateur</MenuItem>
                </Select>
                <TextField 
                    label="Pseudo"
                    id="standard-size-normal"
                    defaultValue="Pseudo"
                    variant="standard"
                />
                <TextField 
                    label="Code Partie"
                    id="standard-size-normal"
                    defaultValue="Code"
                    variant="standard"
                />
                <Button variant="contained" color="success" onClick={joinGame}>
                    Rejoindre la Partie
                </Button>
            </FormControl>
        </Container>
    )
}