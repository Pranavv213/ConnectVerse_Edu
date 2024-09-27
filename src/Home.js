import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Courses from './Courses';
import coin from './assets/coin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import courses from './assets/courses.svg'
import job from './assets/job.svg'
import friend from './assets/friend.svg'
import coin_airdrop from './assets/coin_airdrop.svg'
import boy from './assets/boy.svg'
import chat from './assets/chat.svg'

function Home() {

    const [coins,setCoins]=useState(localStorage.getItem('coins')?localStorage.getItem('coins'):0)
    const notify = () => toast("Coming Soon !");
  return (
    <div>
      <br></br>
&nbsp;&nbsp;<img style={{width:'60px'}} src={boy}></img> <span style={{color:'white'}}><b>{localStorage.getItem('userName')}</b></span>
    <br></br><br></br><br></br>
    <img src={chat} style={{position: 'fixed', bottom: '90px', right: '10px', padding: '10px',width:'5em' }}/>
       

    <center><h2 style={{color:'white'}}><img style={{width:'70px'}} src={coin}></img>{localStorage.getItem('coins')?localStorage.getItem('coins'):0}</h2></center>
    <br></br>
    <Courses/>
    <ToastContainer position="top-center" autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<Nav fill variant="tabs" defaultActiveKey="/home" style={{ color: 'white', position: 'fixed', bottom: 0, width: '100%', zIndex: 1000,backgroundColor:'black' }}>
      <Nav.Item>
        <Nav.Link href="/home">
        <img style={{width:'40px'}}src={courses}></img>
        <br/>
        Courses</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link onClick={notify}>
        <img style={{width:'40px'}}src={job}></img>
        <br/>
          Jobs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={notify}>
        <img style={{width:'40px'}}src={friend}></img>
        <br/>
          Friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={notify}>
        <img style={{width:'40px'}}src={coin_airdrop}></img>
        <br/>
        Airdrop</Nav.Link>
      </Nav.Item>
    </Nav>
    </div>
 
  )
}

export default Home






