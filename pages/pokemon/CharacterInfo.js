import { useState, useEffect } from "react";
import useFetch from "../../shared/useFetch";

function CharacterInfo({ data }) {
  const [category, SetCategory] = useState("");
  const handleClick = (e) => {
    SetCategory(e.currentTarget.dataset.category);
  };

  const goBack = () => {
    SetCategory("");
  };

  if (category) {
    return (
      <div className="category">
        <div className="container">
          <div className="category-header">
            <span className="back-button" onClick={goBack} title="go back">
              ←
            </span>
            <h3 className="category-title">{category}</h3>
          </div>
          <Category characterData={data} category={category} />
        </div>
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

function Category({ characterData, category }) {
  if (category === "abilities") {
    return (
      <ul className="category-list">
        {characterData[category].map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.ability.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (category === "held_items") {
    return (
      <ul className="category-list">
        {characterData[category].map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.item.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (category === "moves") {
    return (
      <ul className="category-list">
        {characterData[category].map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.move.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (category === "stats") {
    return (
      <ul className="category-list">
        {characterData[category].map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.stat.name} {el.base_stat}
            </li>
          );
        })}
      </ul>
    );
  }

  if (category === "location_area_encounters") {
    const url = characterData[category];
    const { isLoading, data, isError } = useFetch(url);
    console.log(data);
    if (isLoading) {
      return <h4>...loading</h4>;
    }

    return (
      <ul className="category-list">
        {data.map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.location_area.name}
            </li>
          );
        })}
      </ul>
    );
  }

  if (category === "game_indices") {
    return (
      <ul className="category-list">
        {characterData[category].map((el, i) => {
          return (
            <li key={i} className="category-item">
              {el.game_index} {el.version.name}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default CharacterInfo;
