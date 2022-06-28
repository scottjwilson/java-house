import React from "react";

const defaultFormValues = {
  address: "",
  city: "",
  state: "",
  bedrooms: 4,
  bathrooms: 4,
  price: 55555555,
  forsale: true,
};
const inputClass = `input input-bordered`;

export default function HouseForm({
  onSubmit,
  initialValues = defaultFormValues,
  submitText,
  clearOnSubmit,
}) {
  const [values, setValues] = React.useState(initialValues);

  const setValue = (field, value) =>
    setValues((old) => ({ ...old, [field]: value }));

  const handleSubmit = (e) => {
    if (clearOnSubmit) {
      setValues(defaultFormValues);
    }
    e.preventDefault();
    onSubmit(values);
  };

  React.useEffect(() => {
    setValues(initialValues);
  }, [initialValues]);

  return (
    <form className="form-control" onSubmit={handleSubmit}>
      <label htmlFor="address" className="label">
        <span className="label-text">Address</span>
      </label>
      <input
        className={inputClass}
        type="text"
        placeholder="555 Main St..."
        name="address"
        value={values.address}
        onChange={(e) => setValue("address", e.target.value)}
      />
      <label htmlFor="city" className="label">
        <span className="label-text">City</span>
      </label>
      <input
        className={inputClass}
        type="text"
        placeholder="City"
        name="city"
        value={values.city}
        onChange={(e) => setValues("city", e.target.value)}
      />
      <label htmlFor="state" className="label">
        <span className="label-text">State</span>
      </label>
      <input
        className={inputClass}
        type="text"
        placeholder="State"
        name="state"
        value={values.state}
        onChange={(e) => setValues("state", e.target.value)}
      />
      <label htmlFor="bedrooms" className="label">
        <span className="label-text">Bedrooms</span>
      </label>
      <input
        className={inputClass}
        type="number"
        placeholder="Bedrooms"
        name="bedrooms"
        value={values.bedrooms}
        onChange={(e) => setValues("bedrooms", e.target.value)}
      />
      <label htmlFor="bathrooms" className="label">
        <span className="label-text">Bathrooms</span>
      </label>
      <input
        className={inputClass}
        type="number"
        placeholder="Bathrooms"
        name="bathrooms"
        value={values.bathrooms}
        onChange={(e) => setValues("bathrooms", e.target.value)}
      />
      <label htmlFor="price" className="label">
        <span className="label-text">Price</span>
      </label>
      <input
        className={inputClass}
        type="number"
        placeholder="Price"
        name="price"
        value={values.price}
        onChange={(e) => setValues("price", e.target.value)}
      />

      <div className="mt-6">
        {/* <button
          type="submit"
          className={
            isLoading
              ? "btn-primary btn btn-block loading"
              : "btn-primary btn btn-block"
          }
        >
          Add
        </button> */}
      </div>
      <button className="btn-primary btn btn-block" type="submit">
        {submitText}
      </button>
    </form>
  );
}
