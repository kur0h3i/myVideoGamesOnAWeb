import React from "react";
import GameCard from "./GameCard";

function GameList({ games }) {
  console.log(games); // Verifica si los datos están siendo pasados correctamente

  return (
    <div className="game-list">
      {games.map((game) => (
        <GameCard key={game.id} game={game} />
      ))}
    </div>
  );
}

export default GameList;

