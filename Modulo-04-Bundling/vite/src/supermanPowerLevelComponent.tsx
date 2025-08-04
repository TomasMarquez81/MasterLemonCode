import React from "react";
import * as classes from "./supermanPowerLevelStyles.module.scss";

export const SupermanPowerLevelComponent: React.FC = () => {
  const [powerLevel, setPowerLevel] = React.useState("∞");

  React.useEffect(() => {
    // Podrías hacer una animación o simulación en el futuro
    setPowerLevel("∞");
  }, []);

  return (
    <div className={classes.powerBox}>
      <span>Superman power level: {powerLevel}</span>
    </div>
  );
};
