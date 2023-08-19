import React from "react";

import { Box, Drawer, Typography, styled } from '@mui/material';
import { ArrowBack } from "@mui/icons-material";

//component
import Profile from './Profile';

const Header = styled(Box)`
   background: #008069;
   height: 105.5px;
   color: #FFFFFF;
   display: flex;
   & > svg, & > p{
    margin-top: auto;
    padding: 15px;
    font-weight: 600;
   }
`

const Component = styled(Box)`
   background: #ededed;
   height: 85%;
`
const Text = styled(Typography)`
   font-size: 18px;
`

const drawerStyle = {
    left: 20,
    top: 19.5,
    height: '95%',
    width: '31.2%',
    boxShadow: 'none'
}


const InfoDrawer = ({open, setOpen}) => { //open: true, setopen: function(), .....100

    const handleClose = () => {
         setOpen(false);
    }

    return (
        <Drawer
           open = {open}
           onClose = {handleClose}
           PaperProps = {{sx: drawerStyle}}
           style = {{zIndex: 1500}}
        >
           <Header>
               <ArrowBack onClick = {() => setOpen(false)} />
               <Text>Profile</Text>
           </Header>
           <Component>
                <Profile />

           </Component>
        </Drawer>
    )
}

export default InfoDrawer;