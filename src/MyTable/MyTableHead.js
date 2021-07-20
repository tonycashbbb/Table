import React from 'react';
import {Checkbox, TableCell, TableHead, TableRow} from "@material-ui/core";

const MyTableHead = ({
                       headers,
                       rowCount,
                       numSelected,
                       handleSelectAll
                     }) => {
  return (
    <TableHead>
      <TableRow>
        <TableCell/>
        <TableCell padding="checkbox">
          <Checkbox
            color={"primary"}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleSelectAll}
          />
        </TableCell>
        {headers.map((header, index) => {
          return <TableCell key={`table-cell-${index}`}>{header.text}</TableCell>
        })}
      </TableRow>
    </TableHead>
  );
};

export default MyTableHead;