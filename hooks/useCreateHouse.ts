import axios from "axios";
import { useMutation, queryCache } from "react-query";

export default function useCreateHouse() {
  return useMutation(
    (values) =>
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/house`, values)
        .then((res) => res.data),
    {
      onMutate: (newHouse) => {
        const oldHouses = queryCache.getQueryData("houses");

        if (queryCache.getQueryData("houses")) {
          if (queryCache.getQueryData("houses")) {
            queryCache.setQueryData("houses", (old) => [...old, newHouse]);
          }

          return () => queryCache.setQueryData("houses", oldHouses);
        }
      },
      onError: (error, _newHouse, rollback) => {
        console.error(error);
        if (rollback) rollback();
      },
      onSettled: () => {
        queryCache.invalidateQueries("houses");
      },
    }
  );
}
