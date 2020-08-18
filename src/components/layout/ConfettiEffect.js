import React, { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

const ConfettiEffect = () => {
  const { width, height } = useWindowSize();
  const [recyclevalue, setRecyclevalue] = useState(true);
  setTimeout(() => {
    setRecyclevalue(false);
  }, 3000);
  return (
    <Confetti
      width={width}
      height={height}
      numberOfPieces={2000}
      recycle={recyclevalue}
    />
  );
};

export default ConfettiEffect;
