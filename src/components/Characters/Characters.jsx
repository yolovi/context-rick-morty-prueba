import { useContext, useEffect } from "react";
import { CharacterContext } from "../../context/CharacterContext/CharacterContext";
// import { GlobalContext } from "../../context/GlobalState";

const Characters = () => {
  const { characters, getCharacters } = useContext(CharacterContext);

  useEffect(() => {
    getCharacters();
  }, []);

  if (characters.length <= 0) {
    return <p>Cargando...</p>;
  }

  return (
    <div>
      {characters.map((character) => {
        return (
          <div key={character.id}>
            <img src={character.image} alt="" />
            <p>{character.name}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Characters;
