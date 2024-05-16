
import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";

const FilterButtons = ({ setFilter, currentFilter }) => (
  <FormControl variant="outlined">
    <InputLabel id="filter-label">Filter</InputLabel>
    <Select
      labelId="filter-label"
      value={currentFilter}
      onChange={(e) => setFilter(e.target.value)}
      label="Filter"
    >
      <MenuItem value="all">All</MenuItem>
      <MenuItem value="completed">Completed</MenuItem>
      <MenuItem value="active">Not Yet Completed</MenuItem>
    </Select>
  </FormControl>
);

export default FilterButtons;
