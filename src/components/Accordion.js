import React, { useState } from 'react';

function Accordion({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id='faq'>
    <div>
      
    <div className={`accordion ${isOpen ? 'open' : ''}`}>
      
      <div className="accordion-header" onClick={toggleAccordion}>
        <h2>{title}</h2>
        <span className={`icon ${isOpen ? 'open' : ''}`}><i class="fas fa-times"></i></span>
      </div>
      {isOpen && (
        <div className="accordion-content">
          <p>{content}</p>
        </div>
      )}
    </div>
    
    </div>
    </section>
  );
}


export default Accordion;
