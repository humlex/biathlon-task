import React from "react";

const TableItem = ({ id, name, hits, fireRate, country }) => (
  <tr key={id}>
    <td className="text-center">{id}</td>
    <td className="text-center">{name}</td>
    <td className="text-center">{hits}</td>
    <td className="text-center">{fireRate}</td>
    <td className="text-center">{country}</td>
  </tr>
);

export default TableItem;
