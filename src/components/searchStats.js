
import React from 'react';
import './styles.css';
import GetStats from './getStats';
import GetTypes from './getTypes';
export default class pokeInfo extends React.Component {
    constructor(props){
        super(props);
      
        this.state = {
            pokeInfo:[1,2,3]

        }
    }
    
        render(){
           
   return(
       <div>
       
         <GetStats pokeInfo={this.props.pokeInfo}/>
         <GetTypes pokeType={this.props.pokeType}/>
          
        </div>
   )
       
}  
    
        
}