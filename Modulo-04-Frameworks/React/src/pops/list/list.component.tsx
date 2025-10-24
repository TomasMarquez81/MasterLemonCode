import React from "react";
import { Link } from "react-router-dom";
import LogoutIcon from '@mui/icons-material/Logout';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { CompanyContext } from "@/company.context";
import { InputCompany } from "@/pops/list/components/inputcompany/input.company.component";
import { MemberTable } from "@/pops/list/components/membertable/member.table.component";
import { linkRoutes } from "@/router";


export const List: React.FC = () => {
    const { company, setCompany } = React.useContext(CompanyContext);
    return <>
    <div className="header">
        <h1>Buscar miembros de una organización GitHub</h1>
        <div className="iconsHeader">
            <Link to={linkRoutes.selectApi} style={{color: '#FFF'}}><ArrowBackIcon  fontSize="large"/></Link>
            <Link to={linkRoutes.login} style={{color: '#FFF'}}><LogoutIcon fontSize="large" /></Link>
        </div>
    </div>
        <InputCompany onSearch={setCompany} />
        <MemberTable company={company} />
    </>;
}