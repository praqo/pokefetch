import { useRouter } from "next/router";
import useFetch from "../../shared/useFetch";
import CharacterInfo from "./CharacterInfo";

function Pokemon() {
  const router = useRouter();
  let url = router.query.name
    ? `https://pokeapi.co/api/v2/pokemon/${router.query.name}`
    : null;

  const { isLoading, data } = useFetch(url);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  return (
    <>
      <div className="character-hero">
        <div className="character-hero-left">
          <h3 className="character-name">{data.name}</h3>
          <h3 className="character-description">height {data.height}</h3>
          <h3 className="character-description">weight {data.weight}</h3>
        </div>
        <div className="hero-character-right">
          <img
            className="character-image"
            src={data.sprites.front_default}
            alt={data.name}
          />
        </div>
      </div>
      <CharacterInfo data={data} />
    </>
  );
}

export default Pokemon;
