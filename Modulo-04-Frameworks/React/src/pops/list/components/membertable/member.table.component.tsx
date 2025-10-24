import React from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import Paper from '@mui/material/Paper';
import { MemberEntity } from "../../list.vm";
import { MemberRow } from "./member.row.component";
import { MemberPagination } from "./member.pagination.component";
import { MemberHeader } from "./member.header.component";

interface Props {
  company: string;
}

export const MemberTable: React.FC<Props> = ({ company }) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  React.useEffect(() => { 
        fetch(`https://api.github.com/orgs/${company}/members`)
        .then((response) => response.json())
        .then(setMembers);
    }, [company]);

    if (!members.length) {
        return <p>No hay miembros para <b>{company}</b> o la lista es privada.</p>;
    }

    return (
        <TableContainer component={Paper} sx={{ maxWidth: 650, margin: 'auto', marginTop: 4, backgroundColor: '#474747ca'}}>
            <Table sx={{border: '1px solid #e0e0e0' }} aria-label="table">
                <MemberHeader />
                <TableBody>
                    {members.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((member) => (
                        <MemberRow key={member.id} member={member} />
                    ))}
                </TableBody>
            </Table>
            <MemberPagination
                members={members}
                page={page}
                rowsPerPage={rowsPerPage}
                onPageChange={(event, newPage) => setPage(newPage)}
                onRowsPerPageChange={(event) => {
                setRowsPerPage(+event.target.value);
                setPage(0);
                }} />
        </TableContainer>
        
    );
};