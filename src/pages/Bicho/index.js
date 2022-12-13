import Sorteio from '../../components/Sorteio';
import './bicho.css';

function Bicho(){

    function Grupo(){
        let dezena = Math.round(Math.random()*25 + 1)
        console.log(dezena)
    }

    function Centena(){
        let dezena = Math.round(Math.random()*1000)
        console.log(dezena)
    }

    function Milhar(){
        let dezena = Math.round(Math.random()*10000)
        console.log(dezena)
    }

    function Duque(){
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
            console.log(dezenas)
    }

    function Terno(){
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
            console.log(dezenas)
    }
        
    return(
        <div className='container-bicho'>
            <h1>Bem Vindo ao Bicho</h1>

            <Sorteio funcao={Grupo} placeholder='GRUPO'/>
            <Sorteio funcao={Centena} placeholder='CENTENA'/>
            <Sorteio funcao={Milhar} placeholder='MILHAR'/>
            <Sorteio funcao={Duque} placeholder='DUQUE-DEZENA'/>
            <Sorteio funcao={Terno} placeholder='TERNO-DEZENA'/>
            
        </div>

        
    )
}

export default Bicho;