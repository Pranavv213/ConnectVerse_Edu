import React from 'react'
import Auth_Referral from './Auth_Referral'
import Home from './Home';
import FriendsPage from './Friends';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';

function App() {
  return (
<div style={{backgroundColor:'black', fontFamily: 'Comic Sans MS,sans-serif'}}>
   
    <Router>
    <Routes>
    
      <Route path="/:referralCode?" element={<Auth_Referral />} />
      <Route path="/Home" element={<Home />} />
      <Route path="/friends" element={<FriendsPage />} />
   
    </Routes>
  </Router>
  </div>
    
  
    
  )
}

export default App
