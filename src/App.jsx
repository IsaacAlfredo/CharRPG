import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CharacterCard } from "./components/CharacterCard/CharacterCard";

/*Função onde ocorre a requisição POST. O método da biblioteca axios, axios.post, recebe a URL da rota POST do servidor e
um objeto, que será convertido em JSON pela própria biblioteca e enviado pelo body da requisição. A função é executada
quando o botão "Enviar" é acionado. O parâmetro "formData" é passado por meio da função handleSubmit, que utiliza o
Hook useForm. Em resumo, o que a função faz é criar um objeto, onde as chaves são os input (e seu nome é definido
com o "register") e os valores serão o que for preenchido pelo usuário. Assim, passamos todos os dados necessários
para a criação do personagem pela rota mencionada anteriormente.*/

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

  /*Função onde ocorre a requisição GET. O método da biblioteca axios, axios.get, recebe a URL da rota GET do servidor. 
  A função é executada quando o botão "Listar Personagens" é acionado. 
  */
  async function showList() {
    const route = "http://localhost:3000/";
    const response = await axios.get(route);
    const array = response.data.characters;
    if (array.length > 0) {
      setCharactersArray(array);
    }
  }

  return (
    /*Em react, as funções dos componentes retornam HTML, portanto o código a seguir nada mais é que a definição da página
    com algumas funções referentes ao funcionamento dos botões */
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
        <button onClick={() => handleSubmit(onSubmit)()}>Enviar</button>
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
