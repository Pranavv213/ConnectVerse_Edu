import React from 'react'
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
import Form from 'react-bootstrap/Form';
import { db } from "./firebase-config.js";
import {
  collection,
  getDocs,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

const userCollection = collection(db, "user");

function Courses() {
  return (
    <div>
        <center>
  <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search Courses"
                    className="me-2"
                    aria-label="Search"
                  />
                 
                </Form>
                </center>
                <br></br>
<div class="courses">

<Card style={{ width: '18rem', background: 'rgba(255, 255, 255, 0.1)', // Semi-transparent white
    backdropFilter: 'blur(10px)', // Blur effect
    borderRadius: '10px', // Optional: rounded corners
    border: '1px solid rgba(255, 255, 255, 0.2)', color:'white'  }}>
    <center>
      <Card.Img variant="top" style={{ width: '11rem', height:'11rem', padding:'2em' }} src={basicsofweb3} />
      </center>
      <Card.Body>
        
       <center>
       <Card.Title>Basics of Web 3</Card.Title>
        <button className="button-85" onClick={async ()=>{
           const data = await getDocs(userCollection);
     
           let dbdata= data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
             let userDoc = doc(db, "user", localStorage.getItem('userId'));
             let newFields = { username:localStorage.getItem('userName'),otp:dbdata[localStorage.getItem('userNum')].otp,friends:[...dbdata[localStorage.getItem('userNum')].friends],coins:dbdata[localStorage.getItem('userNum')].coins+25000,highscore:0 };
             await updateDoc(userDoc, newFields);
             localStorage.setItem('coins',parseInt(localStorage.getItem('coins'))+25000)
             window.location.reload()
        }}>Enroll</button>
        </center>
      </Card.Body>
    </Card>
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
        <button className="button-85">Enroll</button>
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
        <button className="button-85">Enroll</button>
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
        <button className="button-85">Enroll</button>
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
        <button className="button-85">Enroll</button>
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
        <button className="button-85">Enroll</button>
        </center>
      </Card.Body>
    </Card>

    </div>

    </div>
    
  )
}

export default Courses