import React from "react";
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';


export const MemberHeader: React.FC = () => {
    return (<TableHead className="header" sx={{ backgroundColor: '#f5f5f5'}} >
                    <TableRow>        
                        <TableCell sx={{fontWeight:'bold'}}>Avatar</TableCell>
                        <TableCell align= "center" sx={{fontWeight:'bold'}}>Login</TableCell>
                        <TableCell align= "right" sx={{fontWeight:'bold'}}>Id</TableCell>
                    </TableRow>
                </TableHead>);
};