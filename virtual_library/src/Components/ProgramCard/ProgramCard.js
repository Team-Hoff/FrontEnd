import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProgramData } from '../Data/programData';

function ProgramCard() {
  return (
    <div>
        <div /*style={{position:'relative', left:'-40px'}}*/ >
        {
                ProgramData.map((program) => (
                    <Card key={program.id} style={{ width: '18rem', float: 'left', marginLeft: 110, marginTop: 30, marginBottom:30, textAlign:'center', alignContent:'left'}}>
                    <Card.Img variant="top" src={program.img} style={{height: '180px'}} />
                    <Card.Body>
                    <Card.Title>{program.name}</Card.Title>
                        <Card.Text>
                            Department of {program.name}.<br/> All course materials are available.
                        </Card.Text>
                        <Link to={`/home/${program.id}`}  style={{color: 'white', textDecoration: 'none'}}><Button variant="primary" style={{background: 'grey', borderColor: 'grey'}}>{program.name}</Button></Link>
                    </Card.Body>
                    </Card>
                ))        
            }
        </div> 
        
    </div>
  )
}

export default ProgramCard