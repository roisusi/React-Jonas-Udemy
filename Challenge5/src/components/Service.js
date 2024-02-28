export default function Server({ children, options, tip, onAvgTip }) {
  const handleChange = (e) => {
    onAvgTip(e.target.value);
  };
  return (
    <div>
      {children}
      <select value={tip} onChange={handleChange}>
        {options.map((el, index) => (
          <option value={index === 3 ? (index + 1) * 5 : index * 5} key={el}>
            {el}
          </option>
        ))}
      </select>
    </div>
  );
}
