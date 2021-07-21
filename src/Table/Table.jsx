import React, {useEffect, useState} from 'react';
import {Paper, TableContainer, Table as TableM} from "@material-ui/core";
import PropTypes from "prop-types";

import {TableHead, TableBody} from "./index";

const Table = ({
                 headers,
                 rows,
                 getSelectedRows,
                 getOrderedRows
               }) => {
  const [selectedRows, setSelectedRows] = useState([])

  useEffect(() => {
    getSelectedRows?.(selectedRows)
  }, [selectedRows, getSelectedRows])

  const handleCheck = (rowId) => {
    const newSelectedRows = selectedRows.includes(rowId)
      ? selectedRows.filter(selectedRowId => selectedRowId !== rowId)
      : [...selectedRows, rowId]

    setSelectedRows(newSelectedRows)
  }

  const handleCheckAll = () => {
    const isAllSelected = selectedRows.length === rows.length

    setSelectedRows(isAllSelected ? [] : rows.map(row => row.id))
  }

  return (
    <TableContainer component={Paper}>
      <TableM>
        <TableHead
          headers={headers}
          rowCount={rows.length}
          numSelected={selectedRows.length}
          handleCheckAll={handleCheckAll}
        />
        <TableBody
          headers={headers}
          rows={rows}
          selectedRows={selectedRows}
          handleCheck={handleCheck}
          getOrderedRows={getOrderedRows}
        />
      </TableM>
    </TableContainer>
  );
};

Table.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
  })).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    equipment: PropTypes.string.isRequired,
    pda: PropTypes.string.isRequired,
    startWeek: PropTypes.string.isRequired,
    endWeek: PropTypes.string.isRequired,
    intervalSettings: PropTypes.string.isRequired,
    weekNumber: PropTypes.string.isRequired,
    interval: PropTypes.string.isRequired,
  })).isRequired,
  getSelectedRows: PropTypes.func,
  getOrderedRows: PropTypes.func,
}

export default Table;