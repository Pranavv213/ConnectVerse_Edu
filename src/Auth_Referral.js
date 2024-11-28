import React,{useState,useRef} from 'react'
import { useNavigate } from 'react-router-dom';
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
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import './Home.css'
import Faq from "react-faq-component";
import Card from 'react-bootstrap/Card';
import eth from './assets/eth.svg'
import sol from './assets/sol.svg'
import polygon from './assets/polygon.svg'
import cosmos from './assets/cosmos.svg'
import avax from './assets/avax.svg'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import okto from './assets/okto.png'

function Home() {

    const [coins,setCoins]=useState(localStorage.getItem('coins')?localStorage.getItem('coins'):0)
    const notify = () => toast("Please Log In to continue !");
    const { authenticate } = useOkto();
    const [authToken, setAuthToken] = useState(null);
    const { showWidgetModal, closeModal } = useOkto();
    const { createWallet, getUserDetails, getPortfolio } = useOkto();
    const { transferTokens } = useOkto();
    const navigate=useNavigate()


    const buttonBRef = useRef(null);

    const handleButtonClickA = () => {
      // Programmatically click Button B
      if (buttonBRef.current) {
        buttonBRef.current.click();
      }
    };

const handleGoogleLogin = async (credentialResponse) => {
 const idToken = credentialResponse.credential;
  authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        setAuthToken(authResponse.auth_token);
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
        navigate('/home')
      } else if (error) {
            console.error("Authentication error:", error);
        }
    });
 };
 const handleGoogleLogin2 = useGoogleLogin({
  onSuccess: (credentialResponse) => {
    const idToken = credentialResponse.credential;
    authenticate(idToken, (authResponse, error) => {
      if (authResponse) {
        console.log("Authenticated successfully, auth token:", authResponse.auth_token);
      } else {
        console.error("Authentication error:", error);
      }
    });
  },
  onError: (error) => console.error("Login Failed", error),
});


    const [show, setShow] = useState(false);

      const handleClose = () => setShow(false);
      const handleShow = () => {
        notify()
      }



    const networkName = "POLYGON_TESTNET";
    const tokenAddress = "x2f7b97837f2d14ba2ed3a4b2282e259126a9b848";
    const quantity = "1";
    const recipientAddress = "0x0FC096A53343C68c1086e626661A4bb31486A9e2";

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
   

        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment with Okto Embedded Wallet</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Sender</Form.Label>
              <Form.Control
                type="email"
                value={localStorage.getItem('userName')}
                autoFocus
              />
              <Form.Label>Recipient</Form.Label>
              <Form.Control
                type="email"
                value="0x8e6f3496A2E8bc5a52326722F4Aa273e9fC2d011"
                autoFocus
              />
               <Form.Label>Amount</Form.Label>
                <Form.Control
                
                value="$100"
                autoFocus
              />
            </Form.Group>
          
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={()=>{
            handleClose()
            localStorage.setItem('coins',parseInt(localStorage.getItem('coins'))+25000)
            window.location.reload()
          }}>
           Pay
          </Button>
        </Modal.Footer>
      </Modal>
              
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

  
<div class="login">
  {!authToken ? (
  <div style={{}}>
    <GoogleLogin 
      onSuccess={handleGoogleLogin}
      onError={(error) => console.error("Login Failed", error)}
      render={(renderProps) => (
        <button ref={buttonBRef}
          onClick={renderProps.onClick}
          disabled={renderProps.disabled}
          style={{
            padding: "10px 20px",
            backgroundColor: "#4285F4", // Button color
            color: "#fff", // Text color
            border: "none",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      )}
    />
  </div>
) : (
  <p>Authenticated</p>
)}
<div style={{color:'white',height:'2.5em'}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; using <img style={{width:'3em'}} src={okto}></img> </div>

</div>
<div onClick={()=>{
  notify()
}}><img style={{width:'4em' }} src={okto}></img> <span style={{color:'white',fontSize: '24px'}}>Wallet</span>


  </div>


</div>
<br></br>
<div style={{width:'100%',backgroundColor:'violet',color:'white'}}>

<img style={{width:'2em'}} src={okto}></img> Learn through the Course and get Airdrops <img style={{width:'2em'}} src={coin_airdrop}></img> every month based on performance !

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

  <div class="courses" >
  <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
        <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em' }} src={eth} />
      </center>
      <Card.Body>
       
        <center>
        <Card.Title>Ethereum Development</Card.Title>
        <br></br>
        <button onClick={async ()=>{   
              handleShow()
            
            
        }} className="button-85"> USD $100</button>
        </center>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
        <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em' }} src={sol} />
      </center>
      <Card.Body>
      
       
        <center>
        <Card.Title>Solana Development</Card.Title>
        <br></br>
        <button onClick={async ()=>{
           
     
              handleShow()
            
            
        }} className="button-85">USD $80</button>
        </center>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
        <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em' }} src={polygon} />
      </center>
      <Card.Body>
        
       
        <center>
        <Card.Title>Polygon Development</Card.Title>
        <br></br>
        <button onClick={async ()=>{
          
              handleShow()
            
            
        }} className="button-85">USD $40</button>
        </center>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
        <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em'}} src={cosmos} />
      </center>
      <Card.Body>
       
        <center>
        <Card.Title>Cosmos Development</Card.Title>
        <br></br>
        <button onClick={async ()=>{
         
     
              handleShow()
            
            
        }} className="button-85">USD $120</button>
        </center>
      </Card.Body>
    </Card>
    <Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
        <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em' }} src={avax} />
      </center>
      <Card.Body>
        
       
        <center>
        <Card.Title>Avalanche Development</Card.Title>
        <br></br>
        <button onClick={async ()=>{
         
     
              handleShow()
            
            
        }} className="button-85">USD $40</button>
        </center>
      </Card.Body>
    </Card>
    </div>
    <br></br> <br></br> <br></br> <br></br>
    <Faq
                data={data}
                styles={styles}
                config={config}
            />
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
<br></br><br></br><br></br><br></br><br></br>
<center>
<span style={{color:'white'}}>@ConnectVerse 2024</span>
</center>

<br></br><br></br>
    </div>
 
  )
}

export default Home






