import React from "react";
import * as classes from "./supermanCardStyles.module.scss";

export const SupermanMovieCardComponent: React.FC = () => {
  return (
    <div className={`card shadow-lg ${classes.card}`}>
      <img
        src="/src/content/logo.png"
        className="card-img-top"
        alt="Superman Legacy Poster"
      />
      <div className="card-body">
        <h5 className="card-title">Superman: Legacy</h5>
        <p className="card-text">
          Dirigida por James Gunn, esta nueva entrega reinicia el universo de Superman en el cine, con David
                Corenswet
                como el Hombre de Acero. Una historia de esperanza, justicia y humanidad.
        </p>
        <a
          href="https://www.imdb.com/title/tt1462764/"
          className="btn btn-primary"
          target="_blank"
        >
          Ver en IMDb
        </a>
      </div>
    </div>
  );
};
