import React from "react";
import { Navigate, Route, Routes} from "react-router-dom";
import { Detail } from "@/scenes/detail";
import { List, SelectApi, ListApiRickMorthy } from "@/scenes";
import { appRoutes, linkRoutes } from "@/router";
import { AppLayout } from "@/layouts";

export const PrivateRouter: React.FC = () => {
    return (
        <Routes>
            <Route path={appRoutes.selectApi} element={<AppLayout headerProps="Selección de Api"><SelectApi /></AppLayout>} />
            <Route path={appRoutes.list} element={<AppLayout headerProps="Buscar miembros de una organización GitHub" linkBacktoPageProps= {linkRoutes.selectApi}><List /></AppLayout>} />
            <Route path={appRoutes.listApiRickMorthi} element={<AppLayout headerProps="Rick and Morthy" linkBacktoPageProps= {linkRoutes.selectApi}><ListApiRickMorthy /></AppLayout>} />
            <Route path={appRoutes.detail} element={<AppLayout headerProps="Detail User Github" linkBacktoPageProps= "/private/list/:company" linkPathParams =  {{ company: "lemoncode" }}><Detail /></AppLayout>} />
            <Route path="*" element={<Navigate to={linkRoutes.login} />} />
        </Routes>
    );
}