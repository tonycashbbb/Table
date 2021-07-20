import React, {useState} from 'react';
import {Paper, Table, TableContainer} from "@material-ui/core";

import {MyTableHead, MyTableBody} from "./index";
import s from './MyTable.module.css'

const MyTable = ({headers, rows}) => {
  const [selectedRows, setSelectedRows] = useState([])

  const handleCheckbox = (rowId) => {
    if (selectedRows.includes(rowId)) {
      setSelectedRows(selectedRows.filter(selectedRowId => selectedRowId !== rowId))
      return
    }

    setSelectedRows([...selectedRows, rowId])
  }

  const handleSelectAll = () => {
    if (selectedRows.length === rows.length) {
      setSelectedRows([])
      return
    }

    const buf = []
    rows.forEach(row => {
      buf.push(row.id)
    })
    setSelectedRows([...buf])
  }

  return (
    <TableContainer component={Paper}>
      <Table classes={s}>
        <MyTableHead
          headers={headers}
          rowCount={rows.length}
          numSelected={selectedRows.length}
          selectedRows={selectedRows}
          handleSelectAll={handleSelectAll}
        />
        <MyTableBody
          headers={headers}
          rows={rows}
          selectedRows={selectedRows}
          handleCheckbox={handleCheckbox}
        />
      </Table>
    </TableContainer>
  );
};

export default MyTable;