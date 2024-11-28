import React,{useEffect, useState} from 'react'
import './Courses.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import basicsofweb3 from './assets/basicsofweb3.png'
import solidity from './assets/solidity.png'
import eth from './assets/eth.svg'
import sol from './assets/sol.svg'
import polygon from './assets/polygon.svg'
import cosmos from './assets/cosmos.svg'
import avax from './assets/avax.svg'
import okto from './assets/okto.png'
import Form from 'react-bootstrap/Form';
import { ToastContainer, toast } from 'react-toastify';
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { useOkto } from "okto-sdk-react";
import { GoogleLogin } from "@react-oauth/google";
import Modal from 'react-bootstrap/Modal';

const userCollection = collection(db, "user");


function Courses() {

const { authenticate } = useOkto();
const [authToken, setAuthToken] = useState(null);
const { showWidgetModal, closeModal } = useOkto();
const { createWallet, getUserDetails, getPortfolio } = useOkto();
const { transferTokens } = useOkto();
const [show, setShow] = useState(false);

const handleClose = () => setShow(false);
const handleShow = () => {
  setShow(true);


}

  const notify = () => toast("Coming Soon !");


  return (
    <div>
        <center>
      

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Payment with <img style={{width:'3em'}} src={okto}></img> </Modal.Title>
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
              
                </center>
                <br></br>
<div class="courses">


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
            
            
        }} className="button-85">USD $100</button>
        </center>
      </Card.Body>
    </Card>

    </div>
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
    </div>
    
  )
}

export default Courses