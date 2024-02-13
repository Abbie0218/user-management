import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserData, UserTableHeader } from '../constants/User';
import { Avatar, Stack } from '@mui/material';

export default function UserList() {
  return (
    <TableContainer component={Paper} style={{marginTop:"28px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {UserTableHeader.map((item, index) => (
              <TableCell key={index + 1}>{item.label}</TableCell>
            ))}
            <TableCell></TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {UserData.map((item) => (
            <TableRow
              key={item.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
               <TableCell>
                <Stack direction='row' spacing={2}>
                  <Avatar
                    alt={item.name}
                    src="https://media.istockphoto.com/id/954956446/photo/graduation-celebration.jpg?s=1024x1024&w=is&k=20&c=dqqRmkBua9C7AlFxUg3XTCrR5W1hG1lfuY20IY6iIr0="
                    sx={{ width: 24, height: 24, borderRadius: "4px" }}
                    variant='square'
                  />
                  <span> {item.name}</span>
                </Stack>
              </TableCell>
              <TableCell>{item.userId}</TableCell>
              <TableCell>{item.email}</TableCell>
              <TableCell>{item.mobile_number}</TableCell>
              <TableCell>{item.department}</TableCell>
              <TableCell>{item.role}</TableCell>
              <TableCell></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}