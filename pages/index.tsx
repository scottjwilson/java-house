import axios from "axios";
import { FormEvent, useState } from "react";
import toast from "react-hot-toast";
import { QueryCache, useMutation, useQueryClient } from "react-query";
import AddHouse from "../components/AddHouse";
import FormContainer from "../components/FormContainer";
import HouseCard from "../components/HouseCard";
import Modal from "../components/Modal";
import useHouses from "../hooks/useHouses";

export default function Home() {
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("952 Java Way");
  const [city, setCity] = useState("Long Beach");
  const [state, setState] = useState("CA");
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(3);
  const [price, setPrice] = useState(4000000);
  const [forsale, setForSale] = useState(true);
  const values = { address, city, state, bedrooms, bathrooms, price, forsale };

  const [showModal, setShowModal] = useState(false);
  const houseQuery = useHouses();
  const queryClient = useQueryClient();

  const createHouseMutation = useMutation(
    (values) =>
      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/api/v1/house`, values)
        .then((res) => res.data),
    {
      onSuccess: async (values) => {
        const previousValue = queryClient.getQueryData("houses");
        queryClient.setQueryData("houses", (old) => [...old, values]);
        return previousValue;
      },
    }
  );

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    createHouseMutation.mutate(values);

    setShowModal(false);
  }
  const inputClass = `input input-bordered`;

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
        <FormContainer>
          {/* <pre>{JSON.stringify(createHouseMutation.isSuccess, null, 2)}</pre> */}
          <form className="form-control" onSubmit={onSubmit}>
            <label htmlFor="address" className="label">
              <span className="label-text">Address</span>
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="555 Main St..."
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <label htmlFor="city" className="label">
              <span className="label-text">City</span>
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="City"
              name="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <label htmlFor="state" className="label">
              <span className="label-text">State</span>
            </label>
            <input
              className={inputClass}
              type="text"
              placeholder="State"
              name="state"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
            <label htmlFor="bedrooms" className="label">
              <span className="label-text">Bedrooms</span>
            </label>
            <input
              className={inputClass}
              type="number"
              placeholder="Bedrooms"
              name="bedrooms"
              value={bedrooms}
              onChange={(e) => setBedrooms(e.target.value)}
            />
            <label htmlFor="bathrooms" className="label">
              <span className="label-text">Bathrooms</span>
            </label>
            <input
              className={inputClass}
              type="number"
              placeholder="Bathrooms"
              name="bathrooms"
              value={bathrooms}
              onChange={(e) => setBathrooms(e.target.value)}
            />
            <label htmlFor="price" className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              className={inputClass}
              type="number"
              placeholder="Price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <div className="mt-6">
              <button
                type="submit"
                className={
                  isLoading
                    ? "btn-primary btn btn-block loading"
                    : "btn-primary btn btn-block"
                }
              >
                Add
              </button>
            </div>
          </form>
        </FormContainer>
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
