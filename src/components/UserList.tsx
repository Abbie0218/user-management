import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { UserData, UserTableHeader } from '../constants/User';
import { Avatar, Button, Dialog, DialogActions, DialogContent, DialogContentText, IconButton, Stack } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';

interface IProps{
  closeDialog: any,
  openDialog: any
}
export default function UserList(props: IProps) {

  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);

  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const userInfo =()=>{
    navigate('/userDetail');
    handleClose();
  }

  const handleOpenDeleteDialog = () => {
    setOpenDeleteDialog(true);
    handleClose();
  };

  const CloseDeleteDialog = () => {
    setOpenDeleteDialog(false);
  };

  const openEditDialog = () =>{
    props.openDialog();
  }

  return (
    <TableContainer component={Paper} style={{marginTop:"28px"}}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {UserTableHeader.map((item, index) => (
              <TableCell key={index + 1} sx={{fontWeight:700}}>{item.label}</TableCell>
            ))}
            <TableCell sx={{fontWeight:700}}>Status</TableCell>
            <TableCell sx={{visibility:"hidden"}}>Actions</TableCell>
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
              <TableCell><IconButton onClick={handleClick}><MoreHorizIcon /></IconButton></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Active</MenuItem>
        <MenuItem onClick={openEditDialog}>Edit</MenuItem>
        <MenuItem onClick={userInfo}>Info</MenuItem>
        <MenuItem onClick={handleOpenDeleteDialog}>Delete</MenuItem>
      </Menu>


      <Dialog
        open={openDeleteDialog}
        onClose={CloseDeleteDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
             Are you sure you want to delete?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={CloseDeleteDialog}>Cancel</Button>
          <Button onClick={CloseDeleteDialog} autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>

    </TableContainer>
  );
}