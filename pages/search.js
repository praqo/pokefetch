import { useRouter } from "next/router";
import useFetch from "../shared/useFetch";

function Search() {
  const router = useRouter();
  let url = router.query.pokemon
    ? `https://pokeapi.co/api/v2/pokemon/${router.query.pokemon}`
    : null;
  const { isLoading, data, isError } = useFetch(url);

  if (isLoading) {
    return <h2>...Loading</h2>;
  }

  if (data.length < 1 || isError) {
    return <h1>no results</h1>;
  }

  return <h1>{JSON.stringify(data)}</h1>;
}

export default Search;
