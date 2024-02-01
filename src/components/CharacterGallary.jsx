import React from "react";
import characterData from "../data/characterData.json";
import Character from "./Character";

const CharacterGallery = () => {
  return (
    <div>
      {characterData.map((character) => (
        <Character
          key={character.id}
          name={character.name}
          imgSrc={character.imgUrl}
          birth={character.birth}
          height={character.height}
          race={character.race}
          gender={character.gender}
          spouse={character.spouse}
          death={character.death}
          realm={character.realm}
          wikiUrl={character.wikiUrl}
        />
      ))}
    </div>
  );
};

export default CharacterGallery;
