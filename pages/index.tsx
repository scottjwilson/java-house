import { useState } from "react";
import { useQuery } from "react-query";
import AddHouse from "../components/AddHouse";
import HouseCard from "../components/HouseCard";
import Modal from "../components/Modal";

import useHouses from "../hooks/useHouses";

export default function Home() {
  const [showModal, setShowModal] = useState(false);
  const houseQuery = useHouses();

  return (
    <section>
      <h1 className="text-center text-3xl py-8 font-bold">
        Real Estate Manager
      </h1>
      <Modal
        show={showModal}
        onClose={() => setShowModal(false)}
        title="Add new 🏠"
      >
        <AddHouse />
      </Modal>
      {houseQuery.isLoading ? (
        <span>Loading...</span>
      ) : houseQuery.isError ? (
        houseQuery.error.message
      ) : (
        <div className="flex items-center flex-col">
          {houseQuery.data.map((house) => (
            <HouseCard house={house} />
          ))}
        </div>
      )}

      <div className="flex justify-center">
        <button className="btn" onClick={() => setShowModal(true)}>
          add new
        </button>
      </div>
    </section>
  );
}
