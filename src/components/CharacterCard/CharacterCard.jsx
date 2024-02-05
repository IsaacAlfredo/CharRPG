import "./CharacterCard.css";

export function CharacterCard({ characterData }) {
  console.log(characterData);
  return (
    <div className="CharacterCard">
      <div className="BaseInfo">
        <p>Nome: {characterData.name}</p>
        <p>Idade: {characterData.age}</p>
        <p>Raça: {characterData.race}</p>
        <p>Classe: {characterData.class}</p>
      </div>
      <div className="Stats">
        <p>Força: {characterData.strength}</p>
        <p>Destreza: {characterData.dexterity}</p>
        <p>Constituição: {characterData.constitution}</p>
        <p>Inteligência: {characterData.intelligence}</p>
        <p>Sabedoria: {characterData.wisdom}</p>
        <p>Carisma: {characterData.charisma}</p>
      </div>
    </div>
  );
}
