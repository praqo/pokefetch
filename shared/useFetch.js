import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  const [isError, setIsError] = useState(false);

  async function fetchData() {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
      setIsLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
      setIsError(true);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (!url) return;

    fetchData();
  }, [url]);

  return { isLoading, data, isError };
};

export default useFetch;
