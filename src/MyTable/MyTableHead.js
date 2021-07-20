import React from 'react';
import {TableCell, TableHead, TableRow} from "@material-ui/core";

const MyTableHead = ({ headers }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell/>
        {headers.map((header, index) => {
          return <TableCell key={`table-cell-${index}`}>{header.text}</TableCell>
        })}
      </TableRow>
    </TableHead>
  );
};

export default MyTableHead;