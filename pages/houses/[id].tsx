import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { FormEvent, useState } from "react";
import HouseCard from "../../components/HouseCard";
import Section from "../../components/Section";
import { HouseProps } from "../../types";

export default function HouseSlug({ house }: HouseProps) {
  const router = useRouter();
  const [isLoading, setLoading] = useState(false);
  const [address, setAddress] = useState(house.address);
  const [city, setCity] = useState(house.city);
  const [state, setState] = useState(house.state);
  const [bedrooms, setBedrooms] = useState(house.bedrooms);
  const [bathrooms, setBathrooms] = useState(house.bathrooms);
  const [price, setPrice] = useState(house.price);
  const [forsale, setForSale] = useState(house.forsale);
  const [id, setId] = useState(house.id);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.put(
        `${process.env.NEXT_PUBLIC_API_URL}/api/v1/house/${house.id}`,

        {
          id,
          address,
          city,
          state,
          bedrooms,
          bathrooms,
          price,
          forsale,
        }
      );

      if (res.status === 200) {
        setLoading(false);
        router.reload();
      }
    } catch (error) {
      alert(error);
    }
  }

  const inputClass = `input input-bordered`;
  return (
    <>
      <div className="max-w-sm mx-auto py-4">
        <a className="btn btn-sm btn-outline" onClick={() => router.back()}>
          Go Back
        </a>
      </div>
      <div className="max-w-md mx-auto flex items-center flex-col mt-4">
        <HouseCard house={house} />
      </div>
      <Section title="Edit house">
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
          <label htmlFor="forsale" className="label">
            <span className="label-text">For Sale?</span>
          </label>
          <input
            className="toggle toggle-primary"
            type="checkbox"
            name="forsale"
            checked={forsale}
            onChange={() => setForSale(!forsale)}
          />
          <span className="label-text p-1">{forsale ? "Yes" : "No"}</span>
          <div className="mt-6">
            <button
              type="submit"
              className={
                isLoading
                  ? "btn-primary btn btn-block loading"
                  : "btn-primary btn btn-block"
              }
            >
              Update
            </button>
            <button
              type="submit"
              className={
                isLoading
                  ? "btn-secondary btn-outline btn btn-block loading"
                  : "btn-secondary btn-outline btn btn-block"
              }
            >
              Delete
            </button>
          </div>
        </form>
      </Section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/v1/house/${ctx.params?.id}`
  );
  const house = await response.json();
  return {
    props: { house },
  };
};
