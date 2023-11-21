import { useState, useEffect } from "react";
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

function Category({ data, category }) {
  if (category === "abilities") {
    return (
      <div>
        {data[category].map((el, i) => {
          return <h5 key={i}>{el.ability.name}</h5>;
        })}
      </div>
    );
  }

  if (category === "held_items") {
    return (
      <div>
        {data[category].map((el, i) => {
          return <h5 key={i}>{el.item.name}</h5>;
        })}
      </div>
    );
  }

  if (category === "moves") {
    return (
      <div>
        {data[category].map((el, i) => {
          return <h5 key={i}>{el.move.name}</h5>;
        })}
      </div>
    );
  }

  if (category === "stats") {
    return (
      <div>
        {data[category].map((el, i) => {
          return (
            <h5 key={i}>
              {el.stat.name}
              {el.base_stat}
            </h5>
          );
        })}
      </div>
    );
  }

  if (category === "location_area_encounters") {
    return <div>hi</div>;
  }

  if (category === "game_indices") {
    return (
      <div>
        {data[category].map((el, i) => {
          return (
            <h5 key={i}>
              {el.game_index}
              {el.version.name}
            </h5>
          );
        })}
      </div>
    );
  }
}

export default CharacterInfo;
