import Sorteio from '../../components/Sorteio';
import './bicho.css';

function Bicho(){
    return(
        <div className='container-bicho'>
            <h1>Bem Vindo ao Bicho</h1>

            <Sorteio placeholder='MILHAR'/>
            <Sorteio placeholder='CENTENA'/>
            <Sorteio placeholder='DUQUE-DEZENA'/>
            <Sorteio placeholder='TERNO-DEZENA'/>
            <Sorteio placeholder='GRUPO'/>
            
        </div>

        
    )
}

export default Bicho;