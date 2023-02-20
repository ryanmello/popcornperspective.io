import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Student() {

  const[name, setName] = React.useState('')
  const[address, setAddress] = React.useState('')

  const handleClick=(e)=>{
    e.preventDefault();
    const student={name, address}
    console.log(student)
    fetch("http://localhost:8084/students", {
      method:"POST",
      headers:{"Conent-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student Added")
    })
  }

  return (
    <div>
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
      <Button variant="contained" onClick={handleClick}>Submit</Button>
    </div>
  );
}
