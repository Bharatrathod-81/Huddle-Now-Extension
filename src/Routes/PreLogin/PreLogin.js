import React from 'react'
import { Route, Routes } from 'react-router-dom';
import EmailVerification from '../../pages/Email-verification/Email-verification';
import EmailVerificationInfo from '../../pages/Email-verification/Email-verificationInfo';
import Errorpage from '../../component/404/Errorpage';
import CheckMagicLink from '../../pages/Email-verification/CheckMagic-link';


const PreLogin = () => {
  return (
    <div>
        <Routes>
            <Route path="/:id?" element={<EmailVerification/>}/>
            <Route path="/shareLink/:id?" element={<EmailVerification/>}/>
            <Route path="/firstLogin/:extensionId?" element={<EmailVerification/>}/>
            <Route path="/EmailInfo/:id?/:email?" element={<EmailVerificationInfo/>}/>
            <Route path="/check/:id" element={<CheckMagicLink/>}/>
            <Route path="*" element={<Errorpage/>}/>
        </Routes>
      
    </div>
  )
}

export default PreLogin;
