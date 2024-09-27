import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Courses from './Courses';
import coin from './assets/coin.png'
function Home() {

    const [coins,setCoins]=useState(localStorage.getItem('coins')?localStorage.getItem('coins'):0)
  return (
    <div>
<Nav fill variant="tabs" defaultActiveKey="/home" style={{color:'white'}}>
      <Nav.Item>
        <Nav.Link href="/home">Courses</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Bounties</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Jobs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Airdrop</Nav.Link>
      </Nav.Item>
    </Nav>
    <br></br><br></br><br></br>
    <center><h2 style={{color:'white'}}><img style={{width:'5em'}} src={coin}></img>{localStorage.getItem('coins')?localStorage.getItem('coins'):0}</h2></center>
    <br></br>
    <Courses/>

    </div>
 
  )
}

export default Home