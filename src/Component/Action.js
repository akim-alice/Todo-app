import React from "react";

const Action = () => {
    const handlePick = () => {
        alert("Kisumu");
    };
    return (
      <div>
        <button onClick={handlePick}>what to do</button>
      </div>
    );
  };

export default Action;
