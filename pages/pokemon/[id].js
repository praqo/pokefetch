import { useRouter } from "next/router";

function Pokemon() {
  const router = useRouter();
  return <h1>Pokemon {JSON.stringify(router.query)}</h1>;
}

export default Pokemon;
