import './aleatorio.css';
import Sorteio from '../../components/Sorteio';

function Aleatorio(){

    function Unidade(){
        let dezena = Math.round(Math.random()*10)
        console.log(dezena)
    }
    function Dezena(){
        let dezena = Math.round(Math.random()*100)
        console.log(dezena)
    }
    function Centena(){
        let dezena = Math.round(Math.random()*1000)
        console.log(dezena)
    }

    return(
        <div className='container-aleatorio'>
              <h1>Bem Vindo ao Aleatorio</h1>

              <Sorteio funcao={Unidade} placeholder='0 - 9' />
              <Sorteio funcao={Dezena} placeholder='0 - 99' />
              <Sorteio funcao={Centena} placeholder='0 - 999' />
        </div>
      
    )
}

export default Aleatorio;