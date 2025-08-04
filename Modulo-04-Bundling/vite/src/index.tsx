import React from "react";
import { createRoot} from "react-dom/client";
import {AverageComponent} from "./averageComponent.tsx"
import { TotalScoreComponent } from "./totalScoreComponent.tsx";
import { SupermanMovieCardComponent } from "./supermanMovieCardComponent.tsx";
import { SupermanPowerLevelComponent } from "./supermanPowerLevelComponent.tsx";
import "./title.module.scss";

const container = document.getElementById("root");
if (container) {
    const root = createRoot(container);
    root.render(
        <div>
            <h2 className="titleClass">Superman en React DOM con Vite</h2>
            <AverageComponent />
            <TotalScoreComponent />
            <SupermanMovieCardComponent />
            <SupermanPowerLevelComponent />
        </div>
    );
}