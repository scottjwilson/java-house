import axios from "axios";
import { NextSeo } from "next-seo";

import { FormEvent, useState } from "react";
import { useMutation } from "react-query";

import useCreateHouse from "../hooks/useCreateHouse";
import FormContainer from "./FormContainer";

import Section from "./Section";

export default function addHouse() {
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState("952 Java Way");
  const [city, setCity] = useState("Long Beach");
  const [state, setState] = useState("CA");
  const [bedrooms, setBedrooms] = useState(4);
  const [bathrooms, setBathrooms] = useState(3);
  const [price, setPrice] = useState(4000000);
  const [forsale, setForSale] = useState(true);
  const values = { address, city, state, bedrooms, bathrooms, price, forsale };

  const mutation = useMutation((values) => {
    return axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/house`,
      values
    );
  });

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    mutation.mutate(values);
  }

  const inputClass = `input input-bordered`;

  return (
    <>
      <FormContainer>
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
    </>
  );
}
