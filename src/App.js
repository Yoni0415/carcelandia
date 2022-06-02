
// importo el componente Navbar desde el archivo Navbar.js
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import './css/App.css'
import { Fragment } from 'react'


function App() {
    return (
     <Fragment>
        <div className='App'>
            <div className="header">
                <Navbar/>
            </div>
            <div className="body">
                <Cards/>
            </div>
            
        </div>
       </Fragment>
    );
}

export default App;