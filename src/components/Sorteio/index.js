import './sorteio.css';
// import { useState } from 'react';


function Sorteio({ placeholder, funcao, valor }){
 


    return(
        <div>        
            <div className="container-sorteio">
              
                <span className='campo-sorteio'>{placeholder}</span>
                <button onClick={funcao} className='botao-sorteio'>SORTEAR</button>
               
            </div>
        </div>
        
        
    )
  
}

export default Sorteio;