import Sorteio from '../../components/Sorteio';
import './bicho.css';

function Bicho(){

    function Grupo(){
        let grupo = document.querySelector('#grupo');
        let dezena = Math.round(Math.random()*25 + 1)

        return (
            grupo.innerHTML = dezena
        )
    }

    function Centena(){
        let centena = document.querySelector('#centena')
        let dezena = Math.round(Math.random()*1000)

        return(
            centena.innerHTML = dezena
        )
    }

    function Milhar(){
        let milhar = document.querySelector('#milhar');
        let dezena = Math.round(Math.random()*10000);
        
        return(
            milhar.innerHTML = dezena
        )
    }

    function Duque(){
        let duque = document.querySelector('#duque');
        let dezena;
        let dezenas = [];

        while(dezenas.length < 2){
            dezena = Math.round(Math.random()*100)

            if(dezenas.includes(dezena)){
            }
            else{
                dezenas.push(dezena)
            }
        }
            return (
                duque.innerHTML = dezenas
            )
    }

    function Terno(){
        let terno = document.querySelector('#terno');
        let dezena;
        let dezenas = [];

        while(dezenas.length < 3){
            dezena = Math.round(Math.random()*100)

            if(dezenas.includes(dezena)){
            }
            else{
                dezenas.push(dezena)
            }
        }
            return(
                terno.innerHTML = dezenas
            )
    }
        
    return(
        <div className='container-bicho'>
            <h1>Bem Vindo ao Bicho</h1>

            <Sorteio id='grupo' funcao={Grupo} placeholder='GRUPO'/>
            <Sorteio id='centena' funcao={Centena} placeholder='CENTENA'/>
            <Sorteio id='milhar' funcao={Milhar} placeholder='MILHAR'/>
            <Sorteio id='duque' funcao={Duque} placeholder='DUQUE-DEZENA'/>
            <Sorteio id='terno' funcao={Terno} placeholder='TERNO-DEZENA'/>
            
        </div>

        
    )
}

export default Bicho;