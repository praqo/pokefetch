import { useState, useEffect } from "react";
import useFetch from "../../shared/useFetch";

function CharacterInfo({ data }) {
  const [category, SetCategory] = useState("");
  const handleClick = (e) => {
    console.log(e.currentTarget.dataset.category);
  };

  if (category) {
    return <div>{data.category}</div>;
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
      <div className="character-category"></div>
      <div className="character-category"></div>
      <div className="character-category"></div>
      <div className="character-category"></div>
      <div className="character-category"></div>
    </div>
  );
}

export default CharacterInfo;
