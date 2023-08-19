import React from 'react';
import { useContext } from 'react';

import {AppBar , Toolbar, styled, Box } from '@mui/material';

import { AccountContext } from '../context/AccountProvider';

//component
import LoginDialog from "./account/LoginDialog";
import ChatDialog from './chat/ChatDialog';

const Component = styled(Box)`
    height: 100vh;
    background: #DCDCDC;
`
const Header = styled(AppBar)`
    height : 125px;
    background-color : #00A884;
    box-shadow : none;
`

const LoginHeader = styled(AppBar)`
    height : 210px;
    background-color : #00bfa5;
    box-shadow : none;
`

function Messenger() {
    
    const { account } = useContext(AccountContext);

    return (
        <Component>
       {
        account ? 
        <React.Fragment>
                <Header>
                    <Toolbar>

                    </Toolbar>
                </Header>
                <ChatDialog />
        </React.Fragment>
        :
        <React.Fragment>
                <LoginHeader>
                    <Toolbar>

                    </Toolbar>
                </LoginHeader>
                <LoginDialog />
    
        </React.Fragment>
      }
    </Component>
    )
}
export default Messenger;

