import React from 'react';
import './styles.css'

function Card(props){
    return (
        // <div className="card-container">
        //     <h2>{props.name}</h2>
        //     <img src={props.img} alt={props.name} 
        // </div>
        <div class="row-card">
        <div class="column">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">{props.name}</span>
              <div><img className="imgPoke" src={props.img} alt={props.name}/></div>
          </div>
        </div>
      </div> 
      </div> 
    )
    
}

export default Card;