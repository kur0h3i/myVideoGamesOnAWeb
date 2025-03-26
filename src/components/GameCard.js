import React from "react";
import '../style/GameCard.css';  // Asegúrate de que los estilos estén importados

function GameCard({ game }) {
  const { name, image, status, hoursPlayed } = game;

  // Determina la clase para el estado
  const statusClass = status === "jugando" ? "status-jugando" : "status-terminado";

  const renderStatus = () => {
    if (status === "jugando") {
      return (
        <div>
            <p className={`status ${statusClass}`}> En proceso </p>
            <p className="hours-played">{hoursPlayed}h</p>
        </div>
      );
    } else if (status === "terminado") {
      return (
        <div>
            <p className={`status ${statusClass}`}> Terminado </p>
            <p className="hours-played">{hoursPlayed}h</p>
        </div>
      );
    } else {
      return (
        <p className="status">
          No jugado
        </p>
      );
    }
  };

  return (
    <div className="game-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      {renderStatus()}
    </div>
  );
}

export default GameCard;
