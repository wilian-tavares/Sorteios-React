import './sorteio.css';
// import { useState } from 'react';


function Sorteio({ placeholder, funcao, id }){
 


    return(
        <div>        
            <div className="container-sorteio">
                <div className='nameSorteio'>
                    <span className='name'>{placeholder}</span>
                    <span id={id} className='campo-sorteio'>{placeholder}</span>
                </div>
               
                <button onClick={funcao} className='botao-sorteio'>SORTEAR</button>
               
            </div>
        </div>
        
        
    )
  
}

export default Sorteio;