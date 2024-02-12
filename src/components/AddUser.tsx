import React from 'react';
import Button from '@mui/material/Button';
import DialogTitle from "@mui/material/DialogTitle";
import Dialog from "@mui/material/Dialog";
import {
  IconButton,
  DialogContent,
  Typography,
  InputLabel,
  Select,
  FormControl,
  DialogActions,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import { TextField } from '../utils/TextField'
import UploadImage from "../assets/Users/UploadImage";
import { styled } from "@mui/material/styles";

 interface IProps {
  open: boolean;
  closeDialog: any;
  openDialog: any
}

const Input = styled('input')({
  display: 'none',
});

const AddUser = (props: IProps) => {
  const handleClose = () => {
    props.closeDialog();
};
  return (
    <div>
      <Button variant="outlined" onClick={props.openDialog} sx={{float:"right"}}>Add User</Button>
      <Dialog
        onClose={handleClose}
        open={props.open}
        sx={{
          width: "424px",
          left: "40%",
          "& ::-webkit-scrollbar": { display: "none" },
        }}
      >
        <DialogTitle
          sx={{ m: 0, p: 2, fontWeight: 600, fontSize: "20px" }}
          id="customized-dialog-title"
        >
          Add a user
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              {/* <div style={{ width: "72px", height: "72px", background: "#F5F8FA", textAlign: "center", alignSelf: "center" }} typeof='file' onClick={uploadImage}> */}
              <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" />
                <IconButton
                  color="primary"
                  aria-label="upload picture"
                  component="span"
                  sx={{
                    "&:hover": {
                      //you want this to be the same as the backgroundColor above
                      backgroundColor: "#FFF",
                    },
                  }}
                >
                  <UploadImage />
                </IconButton>
              </label>
              {/* </div> */}
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Personal info
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Employee ID"
                variant="outlined"
                fullWidth
                borderColor="#0000001F"
                sx={{ color: "#08192C" }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="User name"
                variant="outlined"
                fullWidth
                borderColor="#0000001F"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Email Id"
                variant="outlined"
                fullWidth
                borderColor="#0000001F"
              />
            </Grid>
            <Grid item xs={4}>
              <TextField
                id="outlined-basic"
                label="cc"
                variant="outlined"
                fullWidth
                borderColor="#0000001F"
              />
            </Grid>
            <Grid item xs={8}>
              <TextField
                id="outlined-basic"
                label="Mobile"
                variant="outlined"
                fullWidth
                borderColor="#0000001F"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography sx={{ fontSize: "16px", fontWeight: 600 }}>
                Other info
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "#08192C", "&.Mui-focused": { color: "#08192C" } }}
                >
                  Department
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0000001F",
                    },
                    "& .MuiOutlinedInput-root": {
                      "& fieldset": {
                        borderRadius: `20px 0 0 20px`,
                      },
                      "& .MuiOutlinedInput-notchedOutline": {},
                    },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel
                  id="demo-simple-select-label"
                  sx={{ color: "#08192C", "&.Mui-focused": { color: "#08192C" } }}
                >
                  Role
                </InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Age"
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: "#0000001F",
                    },
                  }}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button
            variant="outlined"
            sx={{
              color: "#BA3753",
              borderColor: "#BA3753",
              textTransform: "none",
              "&:hover": { borderColor: "#BA3753", backgroundColor: "#ffff" },
            }}
          >
            Cancel
          </Button>
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#BA3753",
              color: "#fff",
              textTransform: "none",
              "&:hover": { backgroundColor: "#BA3753" },
            }}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default AddUser