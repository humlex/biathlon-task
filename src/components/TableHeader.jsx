import React from "react";
import { SwapVert } from "@material-ui/icons";

const TableHeader = ({ sortBy }) => (
  <tr>
    <th className="text-center" onClick={() => sortBy("id")}>
      Place
      <SwapVert />
    </th>
    <th className="text-center" onClick={() => sortBy("name")}>
      Name
      <SwapVert />
    </th>
    <th className="text-center" onClick={() => sortBy("hits")}>
      Hits
      <SwapVert />
    </th>
    <th className="text-center" onClick={() => sortBy("fireRate")}>
      Fire rate
      <SwapVert />
    </th>
    <th className="text-center" onClick={() => sortBy("country")}>
      Country
      <SwapVert />
    </th>
  </tr>
);

export default TableHeader;
