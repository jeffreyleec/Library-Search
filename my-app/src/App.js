
import "./App.css";
import React from "react";
import Table from "./Components/Table";
import {tableData} from "./Components/data"

function App() {
  const columns = [
    { field: "id", header: "#" },
    { field: "name", header: "Name" },
    { field: "address", header: "Address" },
    { field: "date", header: "Date" },
    { field: "order", header: "Order No" },
  ];
  return (
    <>
    {/* <p>test</p>  */}
    <Table data={tableData} columns={columns}/>
    </>
   
  );
}

export default App;



