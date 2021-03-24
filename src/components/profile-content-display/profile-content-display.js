import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import {Card} from 'react-bootstrap';


const ProfileContentDisplay = ({imageUrl,id,name}) => (


  

    <Card className="col-md-3 mx-4 my-4 " style={{width:'50px'}}>

        <Card.Img className="mt-4 ml-4 " style={{width:'200px'}} variant="top" src={imageUrl}/>
        <Card.Body>
        <Card.Title className=" text-center">{name}</Card.Title>
        
            <Link to= {"profiledetailpage/"+id} className="btn btn-primary " style={{width:'200px'}}>View Profile</Link>
            
        </Card.Body>


    </Card> 
  
    

    
    )
export default ProfileContentDisplay;
      