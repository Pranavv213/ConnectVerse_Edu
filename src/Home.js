import React,{useEffect, useState} from 'react'
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
import logo from './assets/logo.png'
import wallet from './assets/wallet.svg'
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
import './Home.css'
import okto from './assets/okto.png'
import Faq from "react-faq-component";


function Home() {

    const [coins,setCoins]=useState(localStorage.getItem('coins')?localStorage.getItem('coins'):0)
    const notify = () => toast("Coming Soon !");
    const notify2 = () => toast("User Logged In!");
    const { authenticate } = useOkto();
    const [authToken, setAuthToken] = useState(null);
    const { showWidgetModal, closeModal } = useOkto();
    const { createWallet, getUserDetails, getPortfolio } = useOkto();
    const { transferTokens } = useOkto();

    const networkName = "POLYGON_TESTNET";
    const tokenAddress = "x2f7b97837f2d14ba2ed3a4b2282e259126a9b848";
    const quantity = "1";
    const recipientAddress = "0x0FC096A53343C68c1086e626661A4bb31486A9e2";

    useEffect(()=>{
      getUserDetails()
      .then((result) => {
          if(!localStorage.getItem('userName'))
          {
            localStorage.setItem('userName',result.email)
            localStorage.setItem('coins',0)
            window.location.reload()
          }
          else if (localStorage.getItem('coins')=='0') {
            notify2()
          }
      })
      .catch((error) => {
          console.error(`error:`, error);
      });
    })

    const data = {
      title: "FAQ (Understand)",
      rows: [
          {
              title: "What is ConnectVerse Edu ?",
              content: `ConnectVerse Edu is the world’s first Web3 and AI-based EdTech platform, built using Okta on the concept of Proof of Learning. Our mission is to empower learners in India and globally with Web3 knowledge and career opportunities in the decentralized ecosystem.`,
          },
          {
              title: "What is Proof of Learning ?",
              content:
                  "Proof of Learning is an innovative approach where learners are rewarded for their progress and achievements in acquiring skills with Airdrops . It ensures transparency, incentivizes active participation, and validates knowledge acquisition using blockchain technology.",
          },
          {
              title: "How is ConnectVerse different from other EdTech platforms?",
              content: `Unlike traditional platforms, ConnectVerse integrates blockchain and AI to provide a transparent, decentralized learning experience. We offer tokenized rewards, personalized learning pathways, and opportunities to explore Web3 careers and projects. `,
          },
          {
              title: "Who is ConnectVerse Edu for ?",
              content: "ConnectVerse is designed for anyone eager to learn about Web3, blockchain, and AI—students, professionals, developers, and enthusiasts looking to upskill or transition into the decentralized tech ecosystem.",
          },
      ],
  };

  const styles = {
    bgColor: 'black',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "white",
};

const config = {
    // animate: true,
    // arrowIcon: "V",
    // tabFocus: true
};



  return (
    <div>
      <br></br>
&nbsp;&nbsp;
<div class="hello">
<img style={{width:'17em',height:'5m'}} src={logo}></img>
  
  <div    onClick={notify}   style={{color:'white'}}>
  <img style={{width:'40px'}}src={courses}></img>
      <br/>
      Courses
  </div>
  <div   onClick={notify}   style={{color:'white'}}>
  <img style={{width:'40px'}}src={job}></img>
      <br/>
     Job
  </div>
  <div   onClick={notify}  style={{color:'white'}}>
  <img style={{width:'40px'}}src={friend}></img>
      <br/>
     Friend
  </div>
  <div  onClick={notify} style={{color:'white'}}>
  <img style={{width:'40px'}}src={coin_airdrop}></img>
      <br/>
     Airdrop
  </div>
  <div><img style={{width:'50px' }} src={boy}></img> <span style={{color:'white',fontSize: '24px'}}><b >{localStorage.getItem('userName')}</b></span></div>
<div onClick={()=>{
  showWidgetModal()
}}><img style={{width:'60px' }} src={okto}></img> <span style={{color:'white',fontSize: '24px'}}>Wallet</span>


  </div>


</div>
<br></br>
<div style={{width:'100%',backgroundColor:'violet',color:'white'}}>

<img style={{width:'2em'}} src={okto}></img> Learn through the Courses and get Airdrops <img style={{width:'2em'}} src={coin_airdrop}></img> every month based on performance !

</div>
{/* <Nav >
    <Nav.Item>
  
      <Nav.Link href="/home">
      <img style={{width:'20em'}} src={logo}></img>
      </Nav.Link>
    </Nav.Item>
   
    <Nav.Item>
    <div><img style={{width:'60px' }} src={boy}></img> <span style={{color:'white',fontSize: '24px'}}><b >{localStorage.getItem('userName')}</b></span></div>
    </Nav.Item>
    <Nav.Item>
    <div onClick={()=>{
  showWidgetModal()
}}><img style={{width:'60px' }} src={wallet}></img> <span style={{color:'white',fontSize: '24px'}}>Wallet</span>


  </div>

    </Nav.Item>
   
  </Nav> */}
  
    
    
   <hr style={{backgroundColor:'white',color:'white'}}></hr>
  
    {/* <Nav fill variant="tabs" defaultActiveKey="/home" style={{ color: 'white', width: '100%', zIndex: 1000,backgroundColor:'black' }}>
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
  </Nav> */}
  <br></br>

  <br></br><br></br><br></br>
  <center><h2 style={{color:'white'}}><img style={{width:'70px'}} src={coin}></img>{localStorage.getItem('coins')?localStorage.getItem('coins'):0}</h2></center>
    <Courses/>
    <br></br> <br></br> <br></br> <br></br>
    <Faq
                data={data}
                styles={styles}
                config={config}
            />
    <ToastContainer position="top-right" autoClose={5000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="dark"

/>
<br></br><br></br><br></br><br></br><br></br>
<center>
<span style={{color:'white'}}>@ConnectVerse 2024</span>
</center>

<br></br><br></br>
    </div>
 
  )
}

export default Home






