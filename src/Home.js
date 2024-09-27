import React,{useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Courses from './Courses';
import coin from './assets/coin.png'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Home() {

    const [coins,setCoins]=useState(localStorage.getItem('coins')?localStorage.getItem('coins'):0)
    const notify = () => toast("Coming Soon !");
  return (
    <div>
<Nav fill variant="tabs" defaultActiveKey="/home" style={{color:'white'}}>
      <Nav.Item>
        <Nav.Link href="/home">Courses</Nav.Link>
      </Nav.Item>
     
      <Nav.Item>
        <Nav.Link onClick={notify}>Jobs</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={notify}>Friends</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link onClick={notify}>Airdrop</Nav.Link>
      </Nav.Item>
    </Nav>
    <br></br><br></br><br></br>
    <center><h2 style={{color:'white'}}><img style={{width:'5em'}} src={coin}></img>{localStorage.getItem('coins')?localStorage.getItem('coins'):0}</h2></center>
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
    </div>
 
  )
}

export default Home






