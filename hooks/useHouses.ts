import axios from "axios";
import { useQuery } from "react-query";
export default function useHouses() {
  return useQuery("houses", () =>
    axios
      .get(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/house`)
      .then((res) => res.data)
  );
}
