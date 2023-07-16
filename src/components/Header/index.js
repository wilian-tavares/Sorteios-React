import './header.css';
import { Link } from 'react-router-dom';

function Header(){
    return(
        <div className='header'>
            <div className='logo'>
                <h1>Wil Sorteios</h1>
                <span>Seu site de Sorteios</span>
            </div>  

            <nav className='navegacao'>
                <ul>
                    <li>
                        <Link to='/'> HOME</Link>
                    </li>
                    
                    <li>
                        <Link to='/loterias'>LOTERIAS</Link>
                    </li>
                    
                    <li>
                        <Link to='/bicho'>JOGO DO BICHO</Link>
                    </li>
                        
                    <li>
                        <Link to='/aleatorio'>ALEATÓRIO</Link>
                    </li>
                </ul>
            </nav>
            
        </div>    
    )
}

export default Header;