import React, { useEffect, useState } from "react";
import { CardRickMorthi, ModalRickMorthi } from "@/pops/apirickmorthi/components";
import { Character } from "./apirickmorthy.vm";


export const ApiRickMortyComponent: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
    const [selectedCharacter, setSelectedCharacter] = React.useState<Character | null>(null);
  const [open, setOpen] = React.useState(false);

   useEffect(() => {
    const fetchCharacters = async () => {      
        const response = await fetch(`https://rickandmortyapi.com/api/character?page=${currentPage}`);
        const data = await response.json();
        setCharacters(data.results);
        setTotalPages(data.info.pages);      
    };

    fetchCharacters();
  }, [currentPage]);

  const nextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

    const handleSelectCharacter = (char: Character) => {
    setSelectedCharacter(char);
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

    return(<>
   
     <div style={{marginTop: '20px' }}>
      
      
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
            {characters.map((char) => (
                <CardRickMorthi key={char.id} character={char} onSelect={handleSelectCharacter} />
            ))}
          </div>
          <div style={{ marginTop: '20px' }}>
            <button onClick={prevPage} disabled={currentPage === 1}>
              Previous
            </button>
            <span style={{ margin: '0 10px' }}>Page {currentPage} of {totalPages}</span>
            <button onClick={nextPage} disabled={currentPage === totalPages}>
              Next
            </button>
          </div>

                <ModalRickMorthi
        character={selectedCharacter}
        open={open}
        onClose={handleCloseModal}
      />
      
    </div>
    </>
  );
}