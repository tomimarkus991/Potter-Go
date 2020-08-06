import React from "react";

const PotionItem = ({ potion }) => {
  const { spell, type, effect } = potion;
  return (
    <div className="potion-item">
      <span>{spell}</span>
      <br />
      <span>{type}</span>
      <br />
      <span>{effect}</span>
    </div>
  );
};

export default PotionItem;
