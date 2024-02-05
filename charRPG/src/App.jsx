import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CharacterCard } from "./components/CharacterCard/CharacterCard";

async function onSubmit(formData) {
  const route = "http://localhost:3000/create";
  console.log(formData);
  try {
    await axios.post(route, { character: formData });
  } catch (e) {
    console.log(e);
  }
}

function App() {
  const { register, handleSubmit } = useForm();
  const [charactersArray, setCharactersArray] = useState([]);

  async function showList() {
    const route = "http://localhost:3000/";
    const response = await axios.get(route);
    const array = response.data.characters;
    if (array.length > 0) {
      setCharactersArray(array);
    }
  }

  return (
    <>
      <div className="FormContainer">
        <label>
          Nome
          <input type="text" {...register("name")}></input>
        </label>
        <label>
          Idade
          <input type="number" {...register("age")}></input>
        </label>
        <label>
          Raça
          <input {...register("race")}></input>
        </label>
        <label>
          Classe
          <input {...register("class")}></input>
        </label>
        <label>
          Força
          <input type="number" {...register("strength")}></input>
        </label>
        <label>
          Destreza
          <input type="number" {...register("dexterity")}></input>
        </label>
        <label>
          Constituição
          <input type="number" {...register("constitution")}></input>
        </label>
        <label>
          Inteligência
          <input type="number" {...register("intelligence")}></input>
        </label>
        <label>
          Sabedoria
          <input type="number" {...register("wisdom")}></input>
        </label>
        <label>
          Carisma
          <input type="number" {...register("charisma")}></input>
        </label>
        <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
      </div>
      <div className="ListContainer">
        <button className="ShowList" onClick={showList}>
          Listar personagens
        </button>
        {charactersArray.map((character) => (
          <CharacterCard characterData={character} />
        ))}
      </div>
    </>
  );
}

export default App;
