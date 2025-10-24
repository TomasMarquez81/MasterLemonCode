import { linkRoutes } from "@/router";
import React from "react";
import { generatePath, Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

interface Props {
    HeaderProps?: React.ReactNode;
    LinkBacktoPageProps?: string;    
    linkPathParams?: Record<string, string>;
}

export const Header: React.FC<Props> = (props) => {
    const {HeaderProps, LinkBacktoPageProps, linkPathParams} = props;
    return  <div className="header">
                    <h1>{HeaderProps}</h1>
                    <div className="iconsHeader">
                        {LinkBacktoPageProps && (
                            <Link to= {linkPathParams? generatePath(LinkBacktoPageProps, linkPathParams)
                : LinkBacktoPageProps} style={{color: '#FFF'}}><ArrowBackIcon  fontSize="large"/></Link>)}
                        <Link to={linkRoutes.login} style={{color: '#FFF'}}><LogoutIcon fontSize="large" /></Link>
                    </div>
            </div>
}