import type { NextPage } from "next";

import { useQuery } from "react-query";
import AddHouse from "../components/AddHouse";
import HouseCard from "../components/HouseCard";

const Home: NextPage = () => {
  async function fetchHouses() {
    const res = await fetch("http://localhost:8080/api/v1/house");
    return res.json();
  }

  function Houses() {
    const { data: houses, status } = useQuery("houses", fetchHouses);

    if (status === "loading") {
      return <h1></h1>;
    }
    if (status === "error") {
      return <h1>Something went wrong...</h1>;
    }
    if (status === "success") {
      return (
        <div className="flex items-center flex-col">
          {houses.map((house) => (
            <HouseCard house={house} />
          ))}
        </div>
      );
    }
  }
  return (
    <>
      <h1 className="text-center text-3xl py-8 font-bold">
        Real Estate Manager
      </h1>
      <Houses />
      <AddHouse />
    </>
  );
};

export default Home;
