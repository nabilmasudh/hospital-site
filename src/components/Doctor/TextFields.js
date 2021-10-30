import React from 'react'
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function TextFields({label, type}) {
    return (
      <Box
        component="form"
        sx={{
          "& > :not(style)": {width: '100%',},
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="standard-basic" label={label}
        type={type} variant="standard" />
      </Box>
    );
}
