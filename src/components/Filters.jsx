import React from "react";

function Filters({ setFilter, setTagFilter, tagFilter, games }) {
  // Extraer todas las etiquetas únicas de los juegos
  const getAllTags = () => {
    const allTags = new Set();
    games.forEach(game => {
      if (game.tags) {
        game.tags.forEach(tag => allTags.add(tag));
      }
    });
    return Array.from(allTags).sort();
  };

  const uniqueTags = getAllTags();

  return (
    <div>
      {/* Filtro por estado */}
      <div className="filter-buttons">
        <button onClick={() => setFilter("jugando")}>Jugando</button>
        <button onClick={() => setFilter("terminado")}>Terminado</button>
        <button onClick={() => setFilter("locura")}>Locura</button>
        <button onClick={() => setFilter("todos")}>Todos</button>
      </div>

      {/* Filtro por etiquetas dinámico */}
      <div className="tag-filter">
        <label htmlFor="tagSelect">Filtrar por etiqueta</label>
        <select
          id="tagSelect"
          value={tagFilter}
          onChange={(e) => setTagFilter(e.target.value)}
        >
          <option value="todos">Todos los géneros</option>
          {uniqueTags.map(tag => (
            <option key={tag} value={tag}>{tag}</option>
          ))}
        </select>
      </div>

      {/* Separador visual */}
      <div className="filter-separator"></div>
    </div>
  );
}

export default Filters;
