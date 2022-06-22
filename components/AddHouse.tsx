import axios from "axios";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { FormEvent, SetStateAction, useState } from "react";
import { useQuery, useMutation, queryCache } from "react-query";
import { toast } from "react-hot-toast";

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

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:8080/api/v1/house", {
        address,
        city,
        state,
        bedrooms,
        bathrooms,
        price,
        forsale,
      });

      if (res.status === 200) {
        setLoading(false);
      }
    } catch (error) {
      alert(error);
    }
  }

  const inputClass = `input input-bordered`;

  return (
    <>
      <NextSeo
        title="Java Real Estate Manager"
        description="Java Real Estate Manager"
      />

      <Section title="Add new house">
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
      </Section>
    </>
  );
}
