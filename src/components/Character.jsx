import React from "react";
import CharacterGallery from "./CharacterGallary";

const Character = (props) => {
  console.log(props);
  return (
    <div>
      <h2 data-testid="character-name">{props.name}</h2>
      <img src={props.imgSrc} alt="generated image" />
      <ul>
        <li data-testid="character-birth">Date of Birth: {props.birth}</li>
        <li>Date of Death: {props.death}</li>
        <li>Race: {props.race}</li>
        <li>Realm: {props.realm}</li>
        <li>Spouse: {props.spouse}</li>
      </ul>
    </div>
  );
};

export default Character;
