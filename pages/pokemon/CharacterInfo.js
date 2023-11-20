import { useState, useEffect } from "react";
import Category from "./Category";
import useFetch from "../../shared/useFetch";

function CharacterInfo({ data }) {
  const [category, SetCategory] = useState("");
  const [fetchData, setFetchedData] = useState([]);
  const handleClick = (e) => {
    SetCategory(e.currentTarget.dataset.category);
  };

  const goBack = () => {
    SetCategory("");
  };

  if (category) {
    return (
      <div className="category">
        <span className="go-back" onClick={goBack}>
          go back
        </span>
        <Category data={data} category={category} />
      </div>
    );
  }

  return (
    <div className="character-info">
      <div
        className="character-category"
        data-category="abilities"
        onClick={handleClick}
      >
        Abilities
      </div>
      <div
        className="character-category"
        data-category="held_items"
        onClick={handleClick}
      >
        Held Items
      </div>
      <div
        className="character-category"
        data-category="moves"
        onClick={handleClick}
      >
        Moves
      </div>
      <div
        className="character-category"
        data-category="stats"
        onClick={handleClick}
      >
        Stats
      </div>
      <div
        className="character-category"
        data-category="location_area_encounters"
        onClick={handleClick}
      >
        Locations
      </div>
      <div
        className="character-category"
        data-category="game_indices"
        onClick={handleClick}
      >
        Game Indeces
      </div>
    </div>
  );
}

export default CharacterInfo;
