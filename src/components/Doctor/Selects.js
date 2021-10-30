import React from 'react'
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function Selects() {
  const [department, setDepartment] = React.useState("");

  const handleChange = (event) => {
    setDepartment(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{width: '100%' }}>
        <InputLabel id="demo-simple-select-label">Department</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={department}
          label="Department"
          onChange={handleChange}
        >
          <MenuItem value={20}>ANESTHESIOLOGY</MenuItem>
          <MenuItem value={30}>CARDIAC AND VASCULAR SURGERY</MenuItem>
          <MenuItem value={30}>CARDIOLOGY (INTERVENTIONAL)</MenuItem>
          <MenuItem value={30}>CHILD DEVELOPMENT</MenuItem>
          <MenuItem value={30}>CLINICAL HEMATOLOGY</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
