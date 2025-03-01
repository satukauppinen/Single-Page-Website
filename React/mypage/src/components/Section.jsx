import React from 'react';

const Section = ({ id, title, imgSrc, imgAlt, children }) => (
  <section id={id}>
    <h2>{title}</h2>
    <img src={imgSrc} alt={imgAlt} className="responsive-image" />
    <p>{children}</p>
  </section>
);

export default Section;
