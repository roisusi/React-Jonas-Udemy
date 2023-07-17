import AccordionItem from "./AccordionItem";
import { useState } from "react";
export default function Accordion({ data }) {
  const [isOpen, setIsOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((el, index) => (
        <AccordionItem
          curr={isOpen}
          onOpen={setIsOpen}
          title={el.title}
          num={index}
          key={index}
        >
          {el.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curr={isOpen}
        onOpen={setIsOpen}
        title="Test 1"
        num={23}
        key={213}
      >
        Bla Bla
      </AccordionItem>
    </div>
  );
}
