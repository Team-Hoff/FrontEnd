import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ACES from '../Assets/Programs/ACES2.png';
import Aerospace from '../Assets/Programs/Aerospace.png';
import Agricultural from '../Assets/Programs/Agricultural.png';
import BMES from '../Assets/Programs/BMES.png';
import Chemical from '../Assets/Programs/Chemical.png';
import Civil from '../Assets/Programs/civil.png';
import ELEESA from '../Assets/Programs/ELEESA.png';
import geological from '../Assets/Programs/geological.png';
import geomatic from '../Assets/Programs/geomatic.png';
import Materials from '../Assets/Programs/Materials.png';
import Mechanical from '../Assets/Programs/Mechanical.png';
import Metallurgical from '../Assets/Programs/Metallurgical.png';
import Petrochem from '../Assets/Programs/Petrochem.png';
import Petroleum from '../Assets/Programs/Petroleum.png';
import Telecom from '../Assets/Programs/Telecom.png';

function Programcard() {
  return (
    <div>
    <Card style={{ width: '18rem', float: 'left', marginLeft: 110, marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={ACES} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Computer Engineering</Card.Title>
        <Card.Text>
            Department of Computer Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/home/computer' onClick={()=>{window.location.href="/home/computer"}} style={{color: 'white', textDecoration: 'none'}}>Computer Engineering</a></Button>
      </Card.Body>
    </Card>
    
    <div>
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Aerospace} style={{height: 180}} />
      <Card.Body>
        <Card.Title>Aerospace Engineering</Card.Title>
        <Card.Text>
            Department of Aerospace Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Aerospace Engineering</a></Button>
      </Card.Body>
    </Card>
    </div>

    <div>
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', marginRight: 20, justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Agricultural} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Agricultural Engineering</Card.Title>
        <Card.Text>
            Department of Agricultural Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Agricultural Engineering</a></Button>
      </Card.Body>
    </Card>
    </div>

    <Card style={{ width: '18rem', float: 'left', marginLeft: 110, marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={BMES} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Biomedical Engineering</Card.Title>
        <Card.Text>
            Department of Biomedical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Biomedical Engineering</a></Button>
      </Card.Body>
    </Card>
    
  
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Chemical} style={{height: 180}} />
      <Card.Body>
        <Card.Title>Chemical Engineering</Card.Title>
        <Card.Text>
            Department of Chemical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Chemical Engineering</a></Button>
      </Card.Body>
    </Card>
    

    
    
   
    
    

    <Card style={{ width: '18rem', float: 'left', marginLeft: 110, marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={ELEESA} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Electrical Engineering</Card.Title>
        <Card.Text>
            Department of Electrical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/home/electrical' onClick={()=>{window.location.href="/home/electrical"}} style={{color: 'white', textDecoration: 'none'}}>Electrical Engineering</a></Button>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={geological} style={{height: 180}} />
      <Card.Body>
        <Card.Title>Geological Engineering</Card.Title>
        <Card.Text>
            Department of Geological Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Geological Engineering</a></Button>
      </Card.Body>
    </Card>
    

   
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', marginRight: 20, justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={geomatic} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Geomatic Engineering</Card.Title>
        <Card.Text>
            Department of Geomatic Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Geomatic Engineering</a></Button>
      </Card.Body>
    </Card>
    

    <Card style={{ width: '18rem', float: 'left', marginLeft: 90, marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Materials} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Materials Engineering</Card.Title>
        <Card.Text>
            Department of Materials Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}> Materials Engineering</a></Button>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Mechanical} style={{height: 180}} />
      <Card.Body>
        <Card.Title>Mechanical Engineering</Card.Title>
        <Card.Text>
            Department of Mechanical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Mechanical Engineering</a></Button>
      </Card.Body>
    </Card>
   

    
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', marginRight: 20, justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Metallurgical} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Metallurgical Engineering</Card.Title>
        <Card.Text>
            Department of Metallurgical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Metallurgical Engineering</a></Button>
      </Card.Body>
    </Card>
    

    
    <Card style={{ width: '18rem', float: 'left', marginLeft: 90, marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Petrochem} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Petrochemical Engineering</Card.Title>
        <Card.Text>
            Department of Petrochemical Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Petrochemical Engineering</a></Button>
      </Card.Body>
    </Card>
    
    
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Petroleum} style={{height: 180}} />
      <Card.Body>
        <Card.Title>Petroleum  Engineering</Card.Title>
        <Card.Text>
            Department of Petroleum Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Petroleum Engineering</a></Button>
      </Card.Body>
    </Card>
    

    
    <Card style={{ width: '18rem', marginLeft: 110, float: 'left', marginRight: 20, justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Telecom} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Telecommunication  Engineering</Card.Title>
        <Card.Text>
            Department of Telecommunication Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Telecommunication Engineering</a></Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '18rem', marginLeft: 90, float: 'left', marginRight: 20, justifyContent: 'space-around', display: 'flex', marginTop: 30, textAlign:'center' }}>
      <Card.Img variant="top" src={Civil} style={{height: 180}} />
      <Card.Body>
      <Card.Title>Civil Engineering</Card.Title>
        <Card.Text>
            Department of Civil Engineering all course materials available
        </Card.Text>
        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><a href='/' style={{color: 'white', textDecoration: 'none'}}>Civil Engineering</a></Button>
      </Card.Body>
    </Card>
    
    </div>
  );
}

export default Programcard;