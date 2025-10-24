import React from "react";
import TablePagination from '@mui/material/TablePagination';
import { MemberEntity } from "../../list.vm";

interface Props {
  members: MemberEntity[];
  page: number;
  rowsPerPage: number;
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export const MemberPagination: React.FC<Props> = ({
  members,
  page,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange
}) => {
  return (
    <TablePagination
      rowsPerPageOptions={[5, 10, 25, 100]}
      component="div"
      count={members.length}
      rowsPerPage={rowsPerPage}
      page={page}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      style={{ backgroundColor: '#f5f5f5' }}
    />
  );
};