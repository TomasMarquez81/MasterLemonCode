import React from "react";
import{ Member } from "../../../../model";
import { Link, generatePath } from "react-router-dom";
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Avatar from '@mui/material/Avatar';

interface MemberRowProps {
    member: Member;
}

export const MemberRow = ({ member }: MemberRowProps) => {
    return (
        <>
        <TableRow className="user-list-container"
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>
                <Avatar src={member.avatar_url} alt={member.login} sx={{ width: 65, height: 65 }} />
              </TableCell>
            <TableCell align="center" style={{color: '#f5f5f5'}}>{member.id}</TableCell>
            <TableCell align="right"><Link to={generatePath("/private/detail/:id", { id: member.login})} style={{color: '#f5f5f5'}}>{member.login}</Link></TableCell>
        </TableRow>
        </>
    )}