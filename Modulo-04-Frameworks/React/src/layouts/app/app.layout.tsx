import React, {PropsWithChildren} from "react";
import { Header } from "./header";

interface Props {
    headerProps?: React.ReactNode;
    linkBacktoPageProps?: string;    
    linkPathParams?: Record<string, string>;
}

export const AppLayout: React.FC<PropsWithChildren<Props>> = ({ children, headerProps, linkBacktoPageProps, linkPathParams }) => {
    return (<>
        <div className="layout-app-container">
            <Header
                HeaderProps={headerProps} 
                LinkBacktoPageProps={linkBacktoPageProps}
                linkPathParams={linkPathParams}
            />
            {children}
        </div>
        </>
    );
}