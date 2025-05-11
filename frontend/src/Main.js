import React from 'react';
import './Main.css'; 

import UseState from './useState';    
 


function Main() {
    return (
        <div className="main">
            <div className="img-container">
            <img src="/welcom.jpg" alt="Welcom" className="image-accueil" />
            </div>
            
            <h1>My first form</h1>
            <UseState/>
        </div>

    );
}
export default Main;