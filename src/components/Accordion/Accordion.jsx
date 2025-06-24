import React, { useRef, useState } from "react";
import "./accordion.scss";

function Accordion({ label, children }) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef(null);

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
          src="/src/assets/chevron.svg"
          alt="chevron"
          className={`ChevronIcon${open ? " open" : ""}`}
        />
      </div>
      <div
        className="AccordionContent"
        style={{
          maxHeight: open
            ? contentRef.current
              ? contentRef.current.scrollHeight + "px"
              : "999px"
            : "0px",
          transition: "max-height 0.7s cubic-bezier(0.4,0,0.2,1), padding 0.7s",
          padding: open ? "20px 30px 22px" : "0 30px",
          overflow: "hidden",
        }}
      >
        <div
          className={`AccordionContentInner${open ? " open" : ""}`}
          ref={contentRef}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export default Accordion;
