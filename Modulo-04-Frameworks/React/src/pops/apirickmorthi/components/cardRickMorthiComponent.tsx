import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/joy/Button';
import Box from '@mui/joy/Box';
import { Character } from "@/pops/apirickmorthi/apirickmorthy.vm";

interface CardProps {
  character: Character;
  onSelect: (character: Character) => void;
}

export const CardRickMorthi: React.FC<CardProps> = ({ character, onSelect }) => {
  return (
    <Card sx={{ maxWidth: 200 }}>
        <CardMedia
        component="img"
        height="140"
        image={character.image}
        alt={character.name}
        />
        <CardContent >
        <Typography gutterBottom variant="h5" component="div" align="center">
        {character.name}
        </Typography>
        <Typography variant="body2" color="text.secondary" align="justify">
            <ul>
            <li>Género: {character.gender}</li>
            <li>Especie: {character.species}</li>
            <li>Estatus: {character.status}</li>
            </ul>
        </Typography>
        <Box sx={{ display: 'grid', justifyContent: 'center' }}>
        <Button
          variant="solid"
          size="lg"
          color="primary"
          aria-label="Explore Bahamas Islands"
          
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}          
        onClick={() => onSelect(character)}
        >
          Ver más
        </Button>
        </Box>
        </CardContent>
    </Card>
    );
};