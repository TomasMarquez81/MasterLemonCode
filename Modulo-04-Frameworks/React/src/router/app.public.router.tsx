import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { Login} from "@/scenes";

import { appRoutes, linkRoutes } from "@/router";

export const PublicRouter: React.FC = () => {
    return (        
        <Routes>
            <Route path={appRoutes.login} element={<Login />} />
            <Route path="*" element={<Navigate to={linkRoutes.login} />} />
        </Routes>
    )
}