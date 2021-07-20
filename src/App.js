import React from "react";

import MyTable from "./MyTable/MyTable";
import {TEXT_CONFIG} from "./i18n/text.config";
import './App.css';
// import List from "./List";

function App() {

  return (
    <div className="wrapper">
      <div className="container">
        <MyTable headers={TEXT_CONFIG.headers}
                 rows={TEXT_CONFIG.rows}/>
        {/*<List/>*/}
      </div>
    </div>
  );
}

export default App;
