import React from "react";

export default function Button({ handleFunction, buttonTitle }) {
  return (
    <div>
      <button onClick={handleFunction}>{buttonTitle}</button>
    </div>
  );
}
