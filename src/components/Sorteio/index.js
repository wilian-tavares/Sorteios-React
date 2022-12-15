import './sorteio.css';
// import { useState } from 'react';


function Sorteio({ placeholder, funcao, id }){
 


    return(
        <div>        
            <div className="container-sorteio">
              
                <span id={id} className='campo-sorteio'>{placeholder}</span>
                <button onClick={funcao} className='botao-sorteio'>SORTEAR</button>
               
            </div>
        </div>
        
        
    )
  
}

export default Sorteio;