import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";

async function onSubmit(formData) {
  const api = "http://localhost:3000/create";
  console.log(formData);
  try {
    await axios.post(api, { character: formData });
  } catch (e) {
    console.log(e);
  }
}

function App() {
  const { register, handleSubmit } = useForm();

  return (
    <div>
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
        <input {...register("strength")}></input>
      </label>
      <label>
        Destreza
        <input {...register("dexterity")}></input>
      </label>
      <label>
        Constituição
        <input {...register("constitution")}></input>
      </label>
      <label>
        Inteligência
        <input {...register("intelligence")}></input>
      </label>
      <label>
        Sabedoria
        <input {...register("wisdom")}></input>
      </label>
      <label>
        Carisma
        <input {...register("charisma")}></input>
      </label>
      <button onClick={() => handleSubmit(onSubmit)()}>Submit</button>
    </div>
  );
}

export default App;
