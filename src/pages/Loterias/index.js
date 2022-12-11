import Sorteio from "../../components/Sorteio";
import './loterias.css';

function Loterias(){
    return(
        <div className='container-loterias'>
            <div>
                <h1>Bem Vindo ao Loterias</h1>
            </div>
           

            <Sorteio placeholder='MEGA-SENA' qtd={6} />
            <Sorteio placeholder='QUINA' qtd={5} />
            <Sorteio placeholder='LOTOFACIL' qtd={15} />
            <Sorteio placeholder='LOTOMANIA' qtd={50} />
            
        </div>
        
    )
}

export default Loterias;