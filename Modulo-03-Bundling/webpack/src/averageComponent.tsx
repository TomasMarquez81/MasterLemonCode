import React from "react";
import { getAvg } from "./averageService.ts";
//import "./averageComponentStyles.scss";
import * as classes from "./averageComponentStyles.module.scss";

export const AverageComponent : React.FC = () => {
  const [average, setAverage] = React.useState(0);

  React.useEffect(() => {
    const scores = [90, 75, 60, 99, 94, 30];
    setAverage(getAvg(scores));
  }, []);

  //<span>Students average: {average}</span>
  //<span className="result-background">
  return (
    <div>
        <span className={classes['result-background']}>
            Segundos en dar la vuelta al mundo {average}
        </span>
    </div>
  );
};