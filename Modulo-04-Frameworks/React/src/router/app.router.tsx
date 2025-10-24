import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { appRoutes, linkRoutes } from "@/router";
import { PublicRouter } from "./app.public.router";
import { PrivateRouter } from "./app.private.router";

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={appRoutes.public} element={<PublicRouter />} />
            <Route path={appRoutes.private} element={<PrivateRouter />} />
            <Route path="*" element={<Navigate to={linkRoutes.selectApi} />} />
        </Routes>
    );
};