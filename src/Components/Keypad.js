import React from "react";

KeyPad = props => {
  const keys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "x",
    "/"
  ];
  const buttons = keys.map(value => (
    <button
      name={value}
      key={value}
      onClick={e => props.handleKeyClick(e.target.name)}
    >
      {" "}
      {value}{" "}
    </button>
  ));

  return <div>{buttons}</div>;
};

export default KeyPad;
