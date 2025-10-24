import React, {PropsWithChildren} from "react";

export const AuthLayout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <div className="layout-app-container">
        <div className="login-container"> {children} </div>
        </div>
    );
}