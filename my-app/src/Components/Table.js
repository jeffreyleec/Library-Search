import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createRoutesFromElements } from "react-router-dom";

export default function Table({ data, columns }) {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div>
      <table>
        <thead>
          <tr></tr>
        </thead>

        <tbody>
          {data.map((row) => (
            <tr>
              {columns.map((col) => (
                <td>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* {data ? null : <p>No Row to show :)</p>} */}
    </div>
  );
}
