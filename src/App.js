import React from "react";

import {Table} from "./Table";
import {TEXT_CONFIG} from "./textConfig";
import './App.css';

const App = () => {
  const getOrderedRows = (newOrderedRows) => {
    console.log('orderedRows: ', newOrderedRows)
  }

  const getSelectedRows = (selected) => {
    console.log('selectedRows: ', selected)
  }

  return (
    <div className="wrapper">
      <div className="container">
        <Table
          headers={TEXT_CONFIG.headers}
          rows={TEXT_CONFIG.rows}
          getSelectedRows={getSelectedRows}
          getOrderedRows={getOrderedRows}
        />
      </div>
    </div>
  );
}

export default App;
