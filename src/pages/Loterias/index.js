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
        console.log(dezenas);

        return mega.append = 'teste';
    }


    function Quina(){
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
        console.log(dezenas)
    }

       
    function Lotofacil(){
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
        console.log(dezenas)
    }

    function Lotomania(){
        let dezena;
        let dezenas = [];

        const qtd = 5;

        while(dezenas.length < qtd){
            dezena = Math.round(Math.random(0,6)*100)

            if(dezenas.includes(dezena)){
            }
            else {
                dezenas.push(dezena)
                console.log(dezena)
            }            
        }
        dezenas.sort(Order)
        console.log(dezenas)
    }
    
   

    return(
        <div className='container-loterias'>
            <div>
                <h1>Bem Vindo ao Loterias</h1>
            </div>
           

            <Sorteio id='mega' funcao={Mega}  placeholder={'Mega'}/>
            <Sorteio id='quina' funcao={Quina} placeholder='QUINA'/>
            <Sorteio funcao={Lotofacil} placeholder='LOTOFACIL'/>
            <Sorteio funcao={Lotomania} placeholder='LOTOMANIA'/>
            
            
        </div>
        
    )
}

export default Loterias;