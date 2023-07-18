import { useState } from "react";
import Item from "./Item";
const PackingList = ({
  items,
  onDeleteItem,
  onHandleToggleItem,
  onClearAllItems,
}) => {
  const [sortBy, setSortBy] = useState("input");
  let SortedItems;

  if (sortBy === "input") {
    SortedItems = items;
  }
  if (sortBy === "description") {
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === "packed") {
    SortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {SortedItems.map((el) => {
          return (
            <Item
              item={el}
              onDeleteItem={onDeleteItem}
              onHandleToggleItem={onHandleToggleItem}
              key={el.id}
            />
          );
        })}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={onClearAllItems}>Clear List</button>
      </div>
    </div>
  );
};

export default PackingList;
