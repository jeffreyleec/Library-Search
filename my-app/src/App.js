
import "./App.css";
import React from "react";

function App() {
  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Jenny Chan</td>
            <td>3 waterfoot road</td>
            <td> 333 123 1234</td>
            <td>jenny.chan@hotmail.com</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
