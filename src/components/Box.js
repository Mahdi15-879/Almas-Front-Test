import React, { useState } from "react";

// Styles
import "./Box.css";

const Box = () => {
  const [isTrue, setIsTrue] = useState(true);

  return (
    <div className="Box">
      <h3>Box</h3>
    </div>
  );
};

export default Box;
