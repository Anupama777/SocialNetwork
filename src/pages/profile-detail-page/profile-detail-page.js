import React from 'react';
import PERSON_DATA from './person-data.js'
import ProfileDetail  from '../../components/profile-content-display/profile-detail';

        
 class ProfileDetailPage extends React.Component {

  
    
    constructor(props) {
        
        super(props);

       console.log(this.props.match.params.id)

        this.state = {

            collections: PERSON_DATA[0].sections[this.props.match.params.id-1]
          

        }
       console.log(this.state.collections)
    

    }


    render()
    {

        const {collections} = this.state;

        return(
        
        <div className="profile-detail-page">
         
            {
               
                   <ProfileDetail  key={this.state.collections.id} name={this.state.collections.name} age={this.state.collections.age} imageUrl={this.state.collections.imageUrl} 
                   city={this.state.collections.city} occupation={this.state.collections.occupation} education={this.state.collections.education}
                    hobbies={this.state.collections.hobbies} father={this.state.collections.father} mother={this.state.collections.mother}></ProfileDetail> 
                

            }

        </div>)
        }
}

export default  ProfileDetailPage ;

