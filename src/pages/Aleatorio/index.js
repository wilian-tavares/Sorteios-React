import './aleatorio.css';
import Sorteio from '../../components/Sorteio';

function Aleatorio(){
    return(
        <div className='container-aleatorio'>
              <h1>Bem Vindo ao Aleatorio</h1>

              <Sorteio placeholder='0 - 9'  />
              <Sorteio placeholder='0 - 99' />
              <Sorteio placeholder='0 - 999' />
        </div>
      
    )
}

export default Aleatorio;