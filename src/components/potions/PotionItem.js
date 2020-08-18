import React from "react";

const PotionItem = ({ potion }) => {
  const { spell, type, effect } = potion;
  return (
    <div className="potion-item block">
      <span>{spell}</span>
      <br />
      <span>{effect}</span>
      <br />
      <span>{type}</span>
    </div>
  );
};

export default PotionItem;
