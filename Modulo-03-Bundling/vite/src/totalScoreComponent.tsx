import React from "react"
import { getTotalScore} from "./averageService"
//import './totalScoreComponentStyles.scss';
import classes from './totalScoreComponentStyles.module.scss';

export const TotalScoreComponent : React.FC = () => {
    const [totalScore, setTotalScore] = React.useState(0);

    React.useEffect(() =>{
        const scores = [10, 20, 30 ,40, 50, 70];
        setTotalScore(getTotalScore(scores));
    }, []);

    //<span className="result-background">
    return (
        <div>
            <span className={classes.resultBackground}>
                Segundos en dar la vuelta al sistema solar: {totalScore}
            </span>
        </div>
    )
}