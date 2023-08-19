import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';

//components
import Messenger from "./components/Messenger";
import AccountProvider from './context/AccountProvider';
// import LoginDialog from './components/account/LoginDialog';


function App() {
  
  const clientId = '679447221843-gdv7g7k0dbd0s3i7mtijh41k0o4sgcuu.apps.googleusercontent.com'

  return (
    <GoogleOAuthProvider clientId = {clientId}>
        <AccountProvider>
            <Messenger />
        </AccountProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
