import { useEffect, useState } from "react";

const useQuery = (request, list) => {
  const [response, setResponse] = useState('');

  useEffect(() => {
    request.then((fetchResponse) => {
      setResponse(fetchResponse.data);
      console.log(list, fetchResponse.data)
    });
  }, []);

  return response;
};

export default useQuery;
