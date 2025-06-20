import { createContext, useReducer } from "react";
import axios from "axios";
import CharacterReducer from "./CharacterReducer";

const initialState = {
  characters: [],
};

export const CharacterContext = createContext(initialState);

export const CharacterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CharacterReducer, initialState);

  const getCharacters = async () => {
    const res = await axios.get("https://rickandmortyapi.com/api/character");
    console.log(res);
    dispatch({
      type: "GET_CHARACTERS",
      payload: res.data.results,
    });
  };

  return (
    <CharacterContext.Provider
      value={{
        characters: state.characters,
        getCharacters,
      }}
    >
      {children}
    </CharacterContext.Provider>
  );
};
