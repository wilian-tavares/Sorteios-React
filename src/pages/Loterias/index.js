import Sorteio from "../../components/Sorteio";
import './loterias.css';

function Loterias(){

    function Order(a,b){
        return a - b;
    }
    
    function Mega(){
        let mega = document.querySelector('#mega');

        let dezena;
        let dezenas = [];

        const qtd = 6;

        while(dezenas.length < qtd){
            dezena = Math.round(Math.random()*59 + 1)

            if(dezenas.includes(dezena)){
            }
            else {
                dezenas.push(dezena)
            }            
        }
        dezenas.sort(Order);

        return (
            mega.innerHTML = dezenas
        )
    }


    function Quina(){
        let quina = document.querySelector('#quina');
        let dezena;
        let dezenas = [];

        const qtd = 5;

        while(dezenas.length < qtd){
            dezena = Math.round(Math.random()*49 + 1)

            if(dezenas.includes(dezena)){
            }
            else {
                dezenas.push(dezena)
            }            
        }
        dezenas.sort(Order)
        return (
            quina.innerHTML = dezenas
        )
    }

       
    function Lotofacil(){
        let lotofacil = document.querySelector('#lotofacil');

        let dezena;
        let dezenas = [];

        const qtd = 15;

        while(dezenas.length < qtd){
            dezena = Math.round(Math.random()*24) + 1

            if(dezenas.includes(dezena)){
            }
            else {
                dezenas.push(dezena)
            }            
        }
        dezenas.sort(Order)

        return(
            lotofacil.innerHTML = dezenas
        )
    }

    function Lotomania(){
        let lotomania = document.querySelector('#lotomania');

        let dezena;
        let dezenas = [];

        const qtd = 50;

        while(dezenas.length < qtd){
            dezena = Math.round(Math.random()*99)

            if(dezenas.includes(dezena)){
            }
            else {
                dezenas.push(dezena)
            }            
        }
        dezenas.sort(Order)
        lotomania.innerHTML = ''

        return(
            dezenas.map((dezena) => {
            lotomania.innerHTML += `${dezena} - `;
            })
        )
    }
    
   

    return(
        <div className='container-loterias'>
            <div>
                <h1>Bem Vindo ao Loterias</h1>
            </div>
           

            <Sorteio id='mega' funcao={Mega}  placeholder={'Mega'}/>
            <Sorteio id='quina' funcao={Quina} placeholder='QUINA'/>
            <Sorteio id='lotofacil' funcao={Lotofacil} placeholder='LOTOFACIL'/>
            <Sorteio id='lotomania' funcao={Lotomania} placeholder='LOTOMANIA'/>
            
            
        </div>
        
    )
}

export default Loterias;