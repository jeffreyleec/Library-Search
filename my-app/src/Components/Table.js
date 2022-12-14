import React, { Component } from "react";
import ReactDOM from "react-dom";
import { createRoutesFromElements } from "react-router-dom";
import "./Table.css"

export default function Table({ data=null, columns=null, hover = true, striped = true }) {
  const getCaps = (head, field) => {
    if (head) return head.toUpperCase();
    return field.toUpperCase();
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {columns && columns.map((head) => (
              <th> {getCaps(head.header, head.field)}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data && data.map((row) => (
            <tr className={`${hover && "hover"} ${striped && "striped"}`}>
              {columns.map((col) => (
                <td>{row[col.field]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {data ? null : <p>No Row to show :)</p>}
    </div>
  );
}
