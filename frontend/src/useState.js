 
import React, { useState } from 'react';

import './useState.css';
function    UseState() {
       const [afficher, setAfficher] = useState(false); 


    return (
        <div className="use-state">
          
             
      <button onClick={() => setAfficher(!afficher)}>
        {afficher ? "Cacher le message" : "Afficher le message"}
      </button>

      {afficher && (
        <p className="text-accueil">Je suis dans mon application 🚀</p>
      )} 
      </div >
          
    );
}
export default UseState;