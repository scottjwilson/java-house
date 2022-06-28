import Link from "next/link";
import { FaHome, FaBath } from "react-icons/fa";
import formatMoney from "../lib/formatMoney";
import { HouseProps } from "../types";

export default function HouseCard({
  house: { id, address, city, state, bedrooms, bathrooms, price, forsale },
}: HouseProps) {
  return (
    <>
      <Link href={`/houses/${id}`}>
        <div className="card bg-base-300 p-4 mb-4 w-96 space-y-1">
          <p>{address}</p>
          <div className="flex items-center">
            <p className="capitalize">{city}</p>
            <p className="uppercase">, {state}</p>
          </div>

          <div className="flex space-x-4">
            <p className="flex items-center">
              <FaHome className="mr-1" />

              {bedrooms}
            </p>
            <p className="flex items-center">
              <FaBath className="mr-1" />
              {bathrooms}
            </p>
          </div>
          {forsale ? (
            <span className="badge badge-sm">On The Market</span>
          ) : (
            <span className="badge badge-sm badge-outline">Off The Market</span>
          )}
          <p>{formatMoney(price)}</p>
        </div>
      </Link>
    </>
  );
}
