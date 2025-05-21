import React, { useState } from "react";
import "./Accordion.scss";
function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="AccordionBox">
      <div
        className="AccordionHeader"
        onClick={() => setOpen((o) => !o)}
        tabIndex={0}
        role="button"
        aria-expanded={open}
      >
        <span>{label}</span>
        <img
          src={open ? "/src/assets/chevron2.svg" : "/src/assets/chevron.svg"}
          alt="chevron"
          className={`ChevronIcon${open ? " open" : ""}`}
        />
      </div>
      <div
        className={`AccordionContent${open ? "" : " AccordionContent--closed"}`}
      >
        {children}
      </div>
    </div>
  );
}

export default Accordion;
