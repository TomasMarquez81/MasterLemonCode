import React from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

interface Props {
  onSearch: (company: string) => void;
}

export const InputCompany: React.FC<Props> = ({ onSearch }) => {
  const [company, setCompany] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = company.trim();
    if (trimmed) onSearch(trimmed);
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 16, display: 'flex', justifyContent: 'center', marginTop: 16 }}>
        <TextField 
            label="Ej: microsoft, vercel, lemoncode"
            variant="filled"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            style={{ marginRight: 8, marginBottom: 0, backgroundColor: '#f5f5f5' }}>
        </TextField>
        <Button type="submit" variant="contained">Buscar</Button>
    </form>
  );
};
