export default function FormContainer({ children }) {
  return (
    <div className=" mx-auto p-2">
      <div className="rounded-md p-4 bg-base-300">
        {/* <h1 className="text-center text-xl">{title}</h1> */}
        <div>{children}</div>
      </div>
    </div>
  );
}
