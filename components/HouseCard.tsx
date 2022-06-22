import Link from "next/link";
import { FaHome, FaBath } from "react-icons/fa";
import formatMoney from "../lib/formatMoney";
interface House {
  id: string;
  address: string;
  city: string;
  state: string;
  bedrooms: number;
  bathrooms: number;
  price: number;
  forsale: boolean;
}
export default function HouseCard({
  house: { id, address, city, state, bedrooms, bathrooms, price, forsale },
}) {
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

          {forsale && <span className="badge badge-sm">On The Market</span>}

          <p>{formatMoney(price)}</p>
        </div>
      </Link>
    </>
  );
}
