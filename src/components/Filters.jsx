import React from "react";

function Filters({ setFilter, setTagFilter, tagFilter }) {
  return (
    <div>
      {/* Filtro por estado */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("jugando")}>Jugando</button>
        <button onClick={() => setFilter("terminado")}>Terminado</button>
        <button onClick={() => setFilter("todos")}>Todos</button>
      </div>

      {/* Filtro por etiquetas (usando un select dropdown) */}
      <div className="tag-filter">
        <label htmlFor="tagSelect">Filtrar por etiqueta</label>
        <select
          id="tagSelect"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
        >
          <option value="todos">Todos</option>
          <option value="Carreras">Carreras</option>
          <option value="Disney">Disney</option>
          <option value="Final Fantasy">Final Fantasy</option>
          <option value="Indie">Indie</option>
          <option value="Kingdom Hearts">Kingdom Hearts</option>
          <option value="Pokemon">Pokémon</option>
          <option value="RPG">RPG</option>
          <option value="Souls Like">Souls Like</option>
        </select>
      </div>

      {/* Separador visual */}
      <div className="filter-separator"></div>
    </div>
  );
}

export default Filters;
