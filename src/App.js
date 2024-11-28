import React from 'react'
import Auth_Referral from './Auth_Referral'
import Home from './Home';
import FriendsPage from './Friends';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import { OktoProvider, BuildType } from 'okto-sdk-react';


function App() {

  const OKTO_CLIENT_API_KEY = "f144c56d-f768-426c-b123-f7ee71f8cee8";
  return (
<div style={{backgroundColor:'black', fontFamily: 'Comic Sans MS,sans-serif'}}>
   
    <Router>
    <Routes>
    
      <Route path="/:referralCode?" element={
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
         <Auth_Referral />
    </OktoProvider>
      
        
        } />
      <Route path="/Home" element={
        
        <OktoProvider apiKey={OKTO_CLIENT_API_KEY} buildType={BuildType.SANDBOX}>
         <Home />
    </OktoProvider>
        
        
        } />
      <Route path="/friends" element={<FriendsPage />} />
   
    </Routes>
  </Router>
  </div>
    
  
    
  )
}

export default App
