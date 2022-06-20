import React, { useState } from "react";

const ListItems = ({ list, setList, buttonTitle }) => {
  const [value, setValue] = useState("");

  function isTextEmpty() {
    return value.length === 0;
  }

  function onClickHandler() {
    if (!isTextEmpty()) {
      setList([...list, value]);
    }
    setValue("");
  }

  return (
    <div>
      <ul className="items-container">
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <div className="input-button-container">
        <input
          className="input-text"
          type="text"
          placeholder="Enter a value"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          className="add-item-button"
          onClick={onClickHandler}
          disabled={isTextEmpty()}
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  );
};

export default ListItems;
