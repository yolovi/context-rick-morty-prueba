import "./App.css";
import Characters from "./components/Characters/Characters";
import { CharacterProvider } from "./context/CharacterContext/CharacterContext";

function App() {
  return (
    <div className="App">
      <h2>APP</h2>
      <CharacterProvider>
        <Characters />
      </CharacterProvider>
    </div>
  );
}

export default App;
