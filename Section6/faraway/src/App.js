import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}
const Logo = () => {
  return <h1>🤿 Far Away 🏝</h1>;
};
const Form = () => {
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
const PackingList = () => {
  return (
    <div className="list">
      <ul>
        {initialItems.map((el) => {
          return <Item item={el} key={el.id} />;
        })}
      </ul>
    </div>
  );
};

const Item = ({ item }) => {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
};
const Stats = () => {
  return (
    <footer className="stats">
      👗You Have X items on your list, and you already packed X (X%)
    </footer>
  );
};

export default App;
