import React, { useState } from 'react';
import GameList from './components/GameList';  // Asegúrate de importar GameList
import gamesData from './games.json';  
import "./style/App.css"

function App() {
  // Estado para los juegos y el filtro
  const [games, setGames] = useState(gamesData);
  const [filter, setFilter] = useState("todos");

  // Filtrar los juegos según el estado
  const filteredGames = games.filter((game) => {
    if (filter === "jugando") {
      return game.status === "jugando";
    } else if (filter === "terminado") {
      return game.status === "terminado";
    } else {
      return true;  // Muestra todos los juegos
    }
  });

  return (
    <div className='App'>
      <div className='container'>
        <h1>Mis Juegos</h1>

        {/* Botones de filtro */}
        <div className="filter-buttons">
          <button onClick={() => setFilter("jugando")}>Jugando</button>
          <button onClick={() => setFilter("terminado")}>Terminado</button>
          <button onClick={() => setFilter("todos")}>Todos</button>
        </div>

        {/* Separador visual */}
        <div className="filter-separator"></div>

        {/* Lista de juegos filtrados */}
        <GameList games={filteredGames} />
        
      </div>
    </div>
  );
}

export default App;
