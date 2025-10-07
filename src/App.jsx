import React, { useState } from "react";
import GameList from "./components/GameList";
import gamesData from "./games.json";
import Filters from "./components/Filters";
import { sortByName } from "./utils/sortByName";
import "./style/App.css";

function App() {
  // Variables State
  const [games] = useState(gamesData);
  const [filter, setFilter] = useState("todos");
  const [tagFilter, setTagFilter] = useState("todos");

  // Ordenar los juegos alfabéticamente por nombre
  const sortedGames = games.sort(sortByName);

  // Filtrar los juegos según el estado (sin afectar el orden alfabético)
  const filteredGames = sortedGames.filter((game) => {
    if (filter === "jugando") {
      return game.status === "jugando";
    } else if (filter === "terminado") {
      return game.status === "terminado";
    } else {
      return true;
    }
  });

  // Filtrar los juegos según la etiqueta seleccionada
  const filteredByTag = filteredGames.filter((game) => {
    const tags = game.tags || [];
    if (tagFilter === "todos") {
      return true;
    } else {
      return tags.includes(tagFilter);
    }
  });

  return (
    <div className="App">
      <div className="container">
        <h1>Mis Juegos</h1>

        <Filters
          setFilter={setFilter}
          setTagFilter={setTagFilter}
          tagFilter={tagFilter}
          games={games}
        />

        <div className="games-counter">
          <p>Mostrando {filteredByTag.length} de {games.length} juegos</p>
        </div>

        <GameList games={filteredByTag} />
      </div>
    </div>
  );
}

export default App;
