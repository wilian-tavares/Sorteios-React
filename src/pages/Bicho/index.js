import Sorteio from '../../components/Sorteio';
import './bicho.css';

function Bicho(){

    function Grupo(){
        let grupo = document.querySelector('#grupo');
        let dezena = Math.round(Math.random()*25 + 1);
        let bicho;

        switch (dezena) {
            case 1:
                bicho = 'AVESTRUZ'
                break;
                
            case 2:
                bicho = 'ÁGUIA'
                break;

            case 3:
                bicho = 'BURRO'
                break;

            case 4:
                bicho = 'BORBOLETA'
                break;

            case 5:
                bicho = 'CACHORRO'
                break;
                
            case 6:
                bicho = 'CABRA'
                break;

            case 7:
                bicho = 'CARNEIRO'
                break;

            case 8:
                bicho = 'CAMELO'
                break;

            case 9:
                bicho = 'COBRA'
                break;

            case 10:
                bicho = 'COELHO'
                break;

            case 11:
                bicho = 'CAVALO'
                break;

            case 12:
                 bicho = 'ELEFANTE'
                break;
                
            case 13:
                bicho = 'GALO'
                break;
                
            case 14:
                bicho = 'GATO'
                break;
                
            case 15:
                bicho = 'JACARÉ'
                break;
                
            case 16:
                bicho = 'LEÃO'
                break;
                
            case 17:
                bicho = 'MACACO'
                break;
                
            case 18:
                bicho = 'PORCO'
                break;
                
            case 19:
                bicho = 'PAVÃO'
                break;
                
            case 20:
                bicho = 'PERU'
                break;

            case 21:
                bicho = 'TOURO'
                break;

            case 22:
               bicho = 'TIGRE'
                break;

            case 23:
                bicho = 'URSO'
                break;

            case 24:
                bicho = 'VEADO'
                console.log(bicho)
                break;

            case 25:
                bicho = 'VACA';
                console.log(bicho)
                break;
            
            default:
                alert(`${dezena} não existe`)   
            }
            
            return (
            grupo.innerHTML = `GRUPO ${dezena} - ${bicho}`
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