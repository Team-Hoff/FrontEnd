import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProgramData } from '../coursesdata/programData';
import Background from '../../Assets/image.png';

function ProgramCard() {
  return (
    <div>
        <div style={{position:'relative', left:'-40px', backgroundImage: `url${Background}`}}>
        {
                ProgramData.map((program) => (
                    <Card key={program.id} style={{ width: '18rem', float: 'left', marginLeft: 110, marginTop: 30, textAlign:'center', alignContent:'left' }}>
                    <Card.Img variant="top" src={program.img} style={{height: '180px'}} />
                    <Card.Body>
                    <Card.Title>{program.name}</Card.Title>
                        <Card.Text>
                            Department of {program.name} all course materials available
                        </Card.Text>
                        <Button variant="primary" style={{background: 'orange', borderColor: 'orange'}}><Link to={`/home/${program.id}`}  style={{color: 'white', textDecoration: 'none'}}>{program.name}</Link></Button>
                    </Card.Body>
                    </Card>
                ))        
            }
        </div> 
        
    </div>
  )
}

export default ProgramCard