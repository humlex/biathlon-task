import React, { useState } from "react";
import data from "../data/participants.json";
import TableHeader from "./TableHeader";
import TableItem from "./TableItem";
import { Table, Input } from "reactstrap";

const TableComponent = () => {
  const [participants, setParticipants] = useState(data);
  const [toggleSort, setIsToggleSort] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const sortBy = (key) => {
    setIsToggleSort(!toggleSort);
    const sortedArray = [
      ...participants.sort((a, b) => {
        if (a[key] > b[key]) {
          return toggleSort ? -1 : 1;
        }
        if (a[key] < b[key]) {
          return toggleSort ? 1 : -1;
        }
        return 0;
      }),
    ];
    setParticipants(sortedArray);
  };

  const searchFilter = (value) => {
    if (searchValue === "") {
      return value;
    } else if (
      value.name.toLowerCase().includes(searchValue.toLocaleLowerCase())
    ) {
      return value;
    }
  };

  return (
    <>
      <div className="mx-auto w-50 my-4">
        <label className="mr-4">Enter the name</label>
        <Input
          type="text"
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>

      <Table className="mx-auto w-50">
        <thead>
          <TableHeader sortBy={sortBy} />
        </thead>
        <tbody>
          {participants
            .filter((participant) => searchFilter(participant))
            .map((participant) => (
              <TableItem
                key={participant.id}
                id={participant.id}
                name={participant.name}
                hits={participant.hits}
                fireRate={participant.fireRate}
                country={participant.country}
              />
            ))}
        </tbody>
      </Table>
      <div className="w-50 mx-auto d-flex justify-content-center">
        <button onClick={() => sortBy("name")} className="btn btn-primary mr-2">
          Sort by name
        </button>
        <button onClick={() => sortBy("hits")} className="btn btn-primary mr-2">
          Sort by hits
        </button>
        <button
          onClick={() => sortBy("fireRate")}
          className="btn btn-primary mr-2"
        >
          Sort by fire rate
        </button>
        <button onClick={() => sortBy("country")} className="btn btn-primary">
          Sort by country
        </button>
      </div>
    </>
  );
};

export default TableComponent;
