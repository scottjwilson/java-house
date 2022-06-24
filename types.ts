export interface PageProps {
  children?: React.ReactNode;
}

export interface HouseProps {
  house: {
    id: string;
    address: string;
    city: string;
    state: string;
    bedrooms: number;
    bathrooms: number;
    price: number;
    forsale: boolean;
  };
}
