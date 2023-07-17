export default function AccordionItem({ num, title, curr, onOpen, children }) {
  const isOpen = curr === num; //if the item i clicked is the same as the current item, then it is open
  return (
    <div
      className={isOpen ? "item open" : "item"}
      onClick={() => (isOpen ? onOpen(null) : onOpen(num))}
    >
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>
      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
}
