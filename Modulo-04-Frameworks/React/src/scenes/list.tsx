import React from "react";
import { CompanyContext } from "@/company.context";
import { InputCompany } from "@/pops/list/components/inputcompany/input.company.component";
import { MemberTable } from "@/pops/list/components/membertable/member.table.component";

export const List: React.FC = () => {
    const { company, setCompany } = React.useContext(CompanyContext);
    return<>
        <InputCompany onSearch={setCompany} />
        <MemberTable company={company} />
    </>
}