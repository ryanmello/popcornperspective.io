import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

export default function Student() {

  const[name, setName] = useState('')
  const[address, setAddress] = useState('')
  const[students, setStudents] = useState([])

  const handleClick=(e)=>{
    e.preventDefault();
    const student={name,address}
    console.log(student)
    fetch("http://localhost:8084/students",{
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body:JSON.stringify(student)
    }).then(()=>{
      console.log("New Student Added")
    })
  }

  useEffect(()=>{
    fetch("http://localhost:8084/students")
    .then(res=>res.json())
    .then((result)=>{
      setStudents(result);
    })}, [])

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

      <div style={{margin:"auto", width:"50%"}}>
        <h2>All Students</h2>
        {students.map(student=>(
          <div style={{padding:"15px", paddingBottom:"15px", textAlign:"left", backgroundColor:"#D3D3D3"}}>
            Id: {student.id} <br/>
            Name: {student.name} <br/>
            Email Address: {student.address}
          </div>
        ))}
      </div>
    </div>
  );
}
