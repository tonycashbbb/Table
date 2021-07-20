import React from 'react';
import {Paper, Table, TableContainer} from "@material-ui/core";

import {MyTableHead, MyTableBody} from "./index";
import s from './MyTable.module.css'

const MyTable = ({headers, rows}) => {

  return (
    <TableContainer component={Paper}>
      <Table classes={s}>
        <MyTableHead
          headers={headers}
        />
        <MyTableBody
          headers={headers}
          rows={rows}
        />
      </Table>
    </TableContainer>
  );
};

export default MyTable;