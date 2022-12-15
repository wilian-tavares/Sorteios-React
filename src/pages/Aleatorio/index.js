import './aleatorio.css';
import Sorteio from '../../components/Sorteio';

function Aleatorio(){

    function Unidade(){
        let unidade = document.querySelector('#unidade');
        let dezena = Math.round(Math.random()*10)

        return(
            unidade.innerHTML = dezena
        )
    }
    function Dezena(){
        let dezenaResultado = document.querySelector('#dezena');
        let dezena = Math.round(Math.random()*100)
        
        return(
            dezenaResultado.innerHTML = dezena
        )
    }
    function Centena(){
        let centena = document.querySelector('#centena')
        let dezena = Math.round(Math.random()*1000)

        return (
            centena.innerHTML = dezena
        )
    }

    return(
        <div className='container-aleatorio'>
              <h1>Bem Vindo ao Aleatorio</h1>

              <Sorteio id='unidade' funcao={Unidade} placeholder='0 - 9' />
              <Sorteio id='dezena' funcao={Dezena} placeholder='0 - 99' />
              <Sorteio id='centena' funcao={Centena} placeholder='0 - 999' />
        </div>
      
    )
}

export default Aleatorio;