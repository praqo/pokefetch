import { useRouter } from "next/router";
import useFetch from "../../shared/useFetch";

function Pokemon() {
  const router = useRouter();
  let url = router.query.id
    ? `https://pokeapi.co/api/v2/pokemon/${router.query.id}`
    : null;

  const { isLoading, data } = useFetch(url);

  console.log(data);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <>
      <div className="character-hero">
        <div className="character-hero-left">
          <h1>Pokemon {data.name}</h1>
        </div>
        <div className="hero-character-right">
          <div
            className="character-image"
            style={{ backgroundImage: `url(${data.sprites.front_default})` }}
          ></div>
        </div>
        <img src={data.sprites.front_default} alt={data.name} />
      </div>
      <div className="character-info">
        <div className="character-category"></div>
        <div className="character-category"></div>
        <div className="character-category"></div>
        <div className="character-category"></div>
        <div className="character-category"></div>
        <div className="character-category"></div>
      </div>
    </>
  );
}

export default Pokemon;
