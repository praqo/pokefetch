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

export default Category;
