export default function Bill({ bill, onBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input
        value={bill}
        type="text"
        onChange={(e) => onBill(e.target.value)}
      />
    </div>
  );
}
