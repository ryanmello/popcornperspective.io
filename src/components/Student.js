import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Student() {

  const[name, setName] = React.useState('')
  const[address, setAddress] = React.useState('')



  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1 },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic" label="Student Name" variant="standard" 
      value={name}
      onChange={(e) => setName(e.target.value)}
      />
      <TextField id="standard-basic" label="Student Address" variant="standard" 
      value={address}
      onChange={(e) => setAddress(e.target.value)}
      />
    </Box>
  );
}
