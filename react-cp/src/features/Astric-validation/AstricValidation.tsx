import { useState } from "react";

function AstricValidation() {
  const [formFields, setFormField] = useState({ name: "", location: "" });
  const [error, setError] = useState({ nameError: "", locationError: "" });
  const [success, setSuccess] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;

    if (name === "userName") {
      setFormField({ ...formFields, name: value });
      setError({
        ...error,
        nameError: value.trim() === "" ? "Name field cannot be empty" : "",
      });
    }

    if (name === "userLocation") {
      setFormField({ ...formFields, location: value });
      setError({
        ...error,
        locationError:
          value.trim() === "" ? "Location field cannot be empty" : "",
      });
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSuccess(true);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <div>
            <span>Name </span>
            <span>*</span>
            <input name="userName" onChange={handleChange} />
            {error.nameError && <p>{error.nameError}</p>}
          </div>

          <div>
            <span>Location </span>
            <span>*</span>
            <input name="userLocation" onChange={handleChange} />
            {error.locationError && <p>{error.locationError}</p>}
          </div>
        </div>

        <button
          type="submit"
          disabled={
            !formFields.name ||
            !formFields.location ||
            error.nameError !== "" ||
            error.locationError !== ""
          }
        >
          Submit Form
        </button>
      </form>

      {success && (
        <div>
          <p>Information submitted successfully</p>
          <p>
            User name is: {formFields.name} and User location is:{" "}
            {formFields.location}
          </p>
        </div>
      )}
    </div>
  );
}

export default AstricValidation;
