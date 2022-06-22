import axios from "axios";
import { GetServerSideProps } from "next";

export default function HouseSlug({ house }) {
  //   return <pre>{JSON.stringify(house, null, 2)}</pre>;
  return <h1>hi</h1>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch("http://localhost:8080/api/v1/house/1");

  console.log(response);

  return {
    props: {},
  };
};
