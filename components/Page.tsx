import { PageProps } from "../types";
import Header from "./Header";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";

const Page = ({ children }: PageProps) => {
  return (
    <>
      <Toaster
        toastOptions={{
          duration: 3000,
          position: "top-center",

          // style: {
          //   paddingInline: "1rem",
          //   fontFamily: "karla, sans-serif",
          //   fontSize: ".9rem",
          // },
        }}
      />
      <Header />
      <main className="min-h-screen">{children}</main>

      <Footer />
    </>
  );
};

export default Page;
