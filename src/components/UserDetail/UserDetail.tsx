import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Stack, Button, Card, Typography, Avatar } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import '../UserTable.css';
import { useState } from 'react';
import Tab from '@mui/material/Tab';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import BasicInfo from './BasicInfo';
import AuditTrail from './AuditTrail';
import AddUser from '../AddUser';
import React from 'react';


const UserDetail = () => {
  const [value, setValue] = useState('one');
  const [isEdit, setIsEdit] = useState(false);

  const handleChange = (e: any,newValue: string) => {
    console.log(e);
    setValue(newValue);
  };

  const openEditOption = () => {
    setIsEdit(true);
  };

  const closeEditOption = () => {
    setIsEdit(false);
  };

  
  return (
    <Card style={{ marginTop: "55px", marginLeft: "67px" }}>
      <Stack direction='row'>
        <Button startIcon={<ArrowBackIosIcon />} color="inherit" className="addRole" sx={{ fontWeight: 600, fontSize: "24px" }}>
          User detail
        </Button>
        <Button
          startIcon={<EditIcon />}
          onClick={openEditOption}
          variant='contained'
          sx={{
            textTransform: "none", color: "#FFFFFF", backgroundColor: "#BA3753", borderRadius: '8px', width: "11%",
            height: "40px", display: "flex", marginLeft: "auto", left: "-19px", textAlign: "center", alignSelf: "center",
            '&:hover': { backgroundColor: "#BA3753" }
          }}>
          Edit Profile
        </Button>
      </Stack>
      <div style={{ width: "1200px", height: "79px", background: "linear-gradient(268.67deg, #E71D36 0%, #207CAF 97.38%)", top: "176px" }}>
        <Stack direction='row' spacing={2}>
          <Typography sx={{ marginLeft: "13% !important", color: "#ffff", fontWeight: 600, fontSize: "32px", position: "relative", top: "14px" }}>Sanjay M</Typography>
          <div style={{ width: "Hug(227px)", height: "Fixed(32px)", background: "#081E38", color: "#fff", display: "flex", marginLeft: "auto", position: "relative", top: "14px", padding: "9px", left: "-19px", alignItems: "center" }}>
            Member since - 06 Aug, 2023
          </div>
        </Stack>
      </div>
      <div>
        <Avatar variant='square' sx={{ width: "100px", height: "100px", marginLeft: "29px", marginTop: "-64px" }} src='https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1546980028.1704326400&semt=sph' />
        <Typography sx={{ margin: "0px 12%", marginTop: "-24px", fontSize: "15px", fontWeight: 400 }}>Machine shop | Supervisor</Typography>
        <Typography sx={{ margin: "0px 29%", marginTop: "-27px" }}><span className='status-active'>Active</span></Typography>
      </div>
      <br />
      <TabContext
        value={value}
        aria-label="wrapped label tabs example"
      >
        <TabList
          onChange={handleChange}
          textColor='inherit'
          sx={{
            ".Mui-selected": {
              color: `#BA3753`,
            },
          }}
          TabIndicatorProps={{
            sx: {
              backgroundColor: '#BA3753',
              height: 3,
            },
          }}>
          <Tab

            sx={{ textTransform: "none", fontWeight: 600, fontSize: "16px" }}
            value="one"
            label="Basic Info"
          />
          <Tab value="two" label="Audit Trail " sx={{ textTransform: "none", fontWeight: 600, fontSize: "16px" }} />
        </TabList>
        <TabPanel value='one'>
          <BasicInfo />
        </TabPanel>
        <TabPanel value='two'>
          <AuditTrail />
        </TabPanel>
      </TabContext>
      {
        isEdit ? <AddUser open={isEdit} closeDialog={closeEditOption} openDialog={openEditOption}/> : ""
      }
    </Card>

  )
}

export default UserDetail;