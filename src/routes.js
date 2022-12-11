import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Home from './pages/Home';
import Loterias from './pages/Loterias';
import Aleatorio from './pages/Aleatorio';
import Bicho from './pages/Bicho';

function RoutesApp(){
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/'  element={ <Home />} />
                <Route path='/loterias' element={ <Loterias/> } />
                <Route path='/Aleatorio' element={ <Aleatorio/> } />
                <Route path='/Bicho' element={ <Bicho/> } />
            </Routes>
            <Footer />
        </BrowserRouter>
    )
}

export default RoutesApp;