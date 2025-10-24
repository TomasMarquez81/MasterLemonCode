import React from "react";
import Modal from '@mui/joy/Modal';
import Typography from  '@mui/material/Typography';
import { ModalDialog } from "@mui/joy";
import { CardMedia, CardContent, Card } from "@mui/material";
import { Character } from "@/pops/apirickmorthi/apirickmorthy.vm";

interface ModalRickMorthiProps {
  character: Character | null;
  open: boolean;
  onClose: () => void;
}

export const ModalRickMorthi: React.FC<ModalRickMorthiProps> = ({
  character,
  open,
  onClose,
}) => {
  if (!character) return null;
    return (
    <Modal open={open} onClose={onClose}>
      <ModalDialog
        color="primary"
        size="lg"
        variant="soft"
        sx={{ borderRadius: "md", p: 2 }}
      >
        <Card sx={{ minWidth: 500 }}>
          <CardMedia
            component="img"
            height="500"
            image={character.image}
            alt={character.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h2" component="div" align="center">
              {character.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" align="justify" sx={{ fontSize: 20 }}>
              Estatus: {character.status}
              <br />
              Especie: {character.species}
              <br />
              Género: {character.gender}
            </Typography>
          </CardContent>
        </Card>
      </ModalDialog>
    </Modal>
  );
};