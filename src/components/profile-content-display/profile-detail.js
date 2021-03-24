import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card,ListGroup, ListGroupItem} from 'react-bootstrap';
import './profile-detail.css'


const ProfileDetail = ({imageUrl,name,city,age,occupation,education,hobbies,father,mother}) => (
<div  className="customCard">
   <div  className="customDiv">
    <Card className="col-md-4  ml-4 pt-4 mx-auto customDetail "  >
        <Card.Img variant="top" src={imageUrl}/>
        <Card.Body>
          <Card.Title className="text-center">{name}</Card.Title>
        </Card.Body>

        <ListGroup className="list-group-flush text-center ">
            <ListGroupItem>City  -    {city}</ListGroupItem>
            <ListGroupItem>Age -  {age}</ListGroupItem>
            <ListGroupItem>Education -  {education}</ListGroupItem>
            <ListGroupItem>Occupation  -  {occupation}</ListGroupItem>
            <ListGroupItem>Hobbies  -  {hobbies}</ListGroupItem>
            <ListGroupItem>Father   -  {father}</ListGroupItem>
            <ListGroupItem>Mother  -  {mother}</ListGroupItem>
        </ListGroup>


    </Card>
    </div>
    </div>
    

    
    )
export default ProfileDetail ;
      