import React from "react";

const DisplayItems = ({ items, title }) => {
  return (
    <section className="items">
      <h2>{title}</h2>
      {
        <ul className="">
          {items.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      }
    </section>
  );
};

export default DisplayItems;
