import React from "react";

import MyTable from "./MyTable/MyTable";
import {TEXT_CONFIG} from "./textConfig";
import './App.css';

const App = () => {
  return (
    <div className="wrapper">
      <div className="container">
        <MyTable
          headers={TEXT_CONFIG.headers}
          rows={TEXT_CONFIG.rows}
        />
      </div>
    </div>
  );
}

export default App;
