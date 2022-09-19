import React from 'react';
import {Card, Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { ProgramData } from '../Data/programData';
import './ProgCard.css';

function ProgramCard() {
  return (
    <div>
        
        {
                ProgramData.map((program) => (
                    <Card className= "progcards" key={program.id}>
                    <Card.Img className="progcardsimg" variant="top" src={program.img}/>
                    <Card.Body className="cardbody">
                    <Card.Title className="cardTitle">Department of {program.name}</Card.Title>
                        {/* <Card.Text className="cardText">
                            Department of {program.name}.<br/> All course materials are available.
                        </Card.Text> */}
                        <Link to={`/home/${program.id}`}  style={{color: 'white', textDecoration: 'none'}}><Button variant="primary" style={{background: 'grey', borderColor: 'grey'}} className="cardsbutton">{program.name}</Button></Link>
                    </Card.Body>
                    </Card>
                ))        
            }
        
        
    </div>
  )
}

export default ProgramCard