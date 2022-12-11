import './sorteio.css';
import { useState } from 'react';


function Sorteio({ placeholder , qtd}){


    let [dezenas, setDezenas] = useState([])
    let [dezena, setDezena] = useState();

 


    function Sortear(qtd){  
        const a = 6;
        while(dezenas.length < a){
            dezena = Math.round(Math.random(0,60)*100)
            
            dezenas.push(dezena)
            console.log(dezena)
            
            
        }
        console.log(dezenas)
    }


    return(
        <div>        
            <div className="container-sorteio">
              
                <span className='campo-sorteio'>{placeholder}</span>
                <button onClick={Sortear} className='botao-sorteio'>SORTEAR</button>
               

            </div>
        </div>
        
        
    )
  
}

export default Sorteio;