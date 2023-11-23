import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { pokemonNames } from "../shared/pokemonNames";

function Search() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [searchString, setSearchString] = useState(router.query.pokemon);
  const [matchArr, setMatchArr] = useState(null);

  function filterData() {
    setIsLoading(true);
    const filteredArr = pokemonNames.filter((item) =>
      item.name.includes(searchString)
    );
    setMatchArr(filteredArr);
    setIsLoading(false);
  }

  useEffect(() => {
    if (searchString === router.query.pokemon) {
      return;
    }

    setSearchString(router.query.pokemon);
  });

  useEffect(() => {
    filterData();
  }, [searchString]);

  if (isLoading) {
    return <h4>...loading</h4>;
  }

  if (matchArr && matchArr.length < 1) {
    return (
      <div className="search-content no-results">
        <h2 className="search-text">No Results For {searchString}</h2>
        <img
          className="no-results-image"
          src="/pokefetch/images/no-result.png"
          alt="no results sign with pokemon"
        />
      </div>
    );
  }

  return (
    <>
      <div className="search-content">
        <h2 className="search-text">Search Results For {searchString}</h2>
        <div className="search-content-grid">
          {matchArr.map((item, index) => {
            const pokemonId = item.url
              .slice(item.url.indexOf("/pokemon/"))
              .slice(9, -1);

            return (
              <Link key={pokemonId} href={`/pokemon?name=${item.name}`}>
                <a className="search-item">
                  <div className="search-item-inner">
                    <img
                      className="search-image"
                      src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`}
                      alt={`pokemon character ${item.name}`}
                    />
                    <h5 className="search-title">{item.name}</h5>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Search;
