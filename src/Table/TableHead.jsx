import React from 'react';
import {
  TableHead as TableHeadM,
  TableRow,
  TableCell,
  Checkbox
} from "@material-ui/core";
import PropTypes from "prop-types";

const TableHead = ({
                     headers,
                     rowCount,
                     numSelected,
                     handleCheckAll
                   }) => {
  return (
    <TableHeadM>
      <TableRow>
        <TableCell/>
        <TableCell padding="checkbox">
          <Checkbox
            color={"primary"}
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={rowCount > 0 && numSelected === rowCount}
            onChange={handleCheckAll}
          />
        </TableCell>
        {headers.map((header, index) => {
          return <TableCell key={`table-cell-${index}`}>{header.text}</TableCell>
        })}
      </TableRow>
    </TableHeadM>
  );
};

TableHead.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  rowCount: PropTypes.number.isRequired,
  numSelected: PropTypes.number.isRequired,
  handleCheckAll: PropTypes.func.isRequired
}

export default TableHead;