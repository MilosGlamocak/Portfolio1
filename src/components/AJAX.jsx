import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import UserDetails from "./UserDetails";



    





export default function Ajax() {

    let [users, setUsers] = useState([])
    useEffect(() => {
        let usersPromise = axios.get('https://jsonplaceholder.typicode.com/users');

        usersPromise.then((value) => {
            setUsers(value.data)
        })
    }, [])

    function handleInspect(id) {

        let user = users[id-1]

        alert(JSON.stringify(user))
    }
      
  let apeironPromise = axios.get('https://corsproxy.io/?https%3A%2F%2Fapeiron-uni.eu%2F');
  let updatedApeiron;
  
  apeironPromise.then((value) => {
    updatedApeiron = value.data.replaceAll('Panevropski univerzitet APEIRON sa svojih 7 fakulteta i 34 studijska programa je savremena institucija visokog obrazovanja koja je svoj program usaglasila i neprekidno ga usklađuje sa zahtjevima tržišta rada, kretanjima u nauci i struci, prepoznavajući potrebe društva i izgrađujući studente u visoko obrazovane, sadašnjim i budućim izazovima dorasle stručnjake, u oblastima za koje je akreditovana, po najvišim standardima kvaliteta iz oblasti visokog obrazovanja.', 'Hakovani ste')
  });


  useEffect(() => {
    console.log(updatedApeiron)
  }, [updatedApeiron])

  axios.put('https://apeiron-uni.eu/', updatedApeiron)
    .then(response => {
        // Handle success
        console.log('Data updated successfully:', response.data);
    })
    .catch(error => {
        // Handle error
        console.error('Error updating data:', error);
    });

  return (
    <>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Username</TableCell>
            <TableCell align="right">Email</TableCell>
            <TableCell align="right">Id</TableCell>
            <TableCell align="right">Address</TableCell>
            <TableCell align="right">Suite</TableCell>
            <TableCell align="right">Phone</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow
              key={user.id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row" style={{cursor: 'pointer'}} onClick={() => handleInspect(user.id)}>
                {user.name}
              </TableCell>
              <TableCell align="right">{user.email}</TableCell>
              <TableCell align="right">{user.id}</TableCell>
              <TableCell align="right">{user.address.street}</TableCell>
              <TableCell align="right">{user.address.suite}</TableCell>
              <TableCell align="right">{user.phone}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
    
  );
}