import { useState } from "react";

const Form = ({ onAddItems }) => {
  const [description, setDescription] = useState("");
  const [numberOfTrips, setNumberOfTrips] = useState(1);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description) {
      return;
    }
    const newItems = {
      description,
      numberOfTrips,
      packed: false,
      id: Date.now(),
    };

    onAddItems(newItems);

    setNumberOfTrips(1);
    setDescription("");
  };

  const handleInputChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSelectChange = (e) => {
    setNumberOfTrips(Number(e.target.value));
  };

  return (
    <form onSubmit={handleSubmit} className="add-form">
      <h3>What do you need for your 😍 trip</h3>
      <select value={numberOfTrips} onChange={handleSelectChange}>
        {Array.from({ length: 20 }, (el, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        onChange={handleInputChange}
        value={description}
        type="text"
        placeholder="Item..."
      />
      <button>Add</button>
    </form>
  );
};
export default Form;
