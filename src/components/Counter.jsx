import React, { useState } from "react";
import Button from "./Button";

export default function Counter() {
  const [countValue, setCountValue] = useState(0);

  const handleIncrement = () => {
    setCountValue((prev) => prev + 1);
  };
  const handleDecrement = () => {
    setCountValue((prev) => prev - 1);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Count: {countValue}</p>
      <div style={{ display: "flex" }}>
        <Button handleFunction={handleIncrement} buttonTitle="Increment" />
        <Button handleFunction={handleDecrement} buttonTitle="Decrement" />
      </div>
    </div>
  );
}
