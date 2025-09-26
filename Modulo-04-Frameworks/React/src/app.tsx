import React from "react";

export const App = () => {
    const [company, setCompany] = React.useState("");
    return (
        <>
            <h1>Hello Vite + React!</h1>
            <input type="text" value={company}/>
            <button>Buscar</button>
        </>
    );
}