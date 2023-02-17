import React from "react";

export default function Button({ text, handleClick }) {
  return <button className="button" onClick={handleClick}>{text}</button>;
}
