import { GetServerSideProps } from "next";
import { HouseProps } from "../../types";

export default function HouseSlug({ house }: HouseProps) {
  return <pre>{JSON.stringify(house, null, 2)}</pre>;
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(
    `http://localhost:8080/api/v1/house/${ctx.params?.id}`
  );
  const house = await response.json();
  return {
    props: { house },
  };
};
