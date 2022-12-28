
import './NavBar.css';
import CardWidget  from '../cardWidget/CardWidget.js';

const Navbar = () => {
    return(
        <header>
          <nav className='navbar navbar-expand-lg'>
          <div className='container-fluid'>
             <a className='title' id='title-big' href=' '>Vanilla</a>
             <h6 className='title' id='title-small'>Deco&Hogar</h6>
             <button class='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target=' navbarSupportedContent' aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation'>
             <span class='navbar-toggler-icon'></span>
             </button>
             <div className='collapse navbar-collapse' id='navbarSupportedContent'>
              <ul className='list navbar-nav me-auto mb-2 mb-lg-0'>
                <li className='nav-item item1'>
                  <a className='nav-link nav-us' aria-current='page' href=' '>Nosotros</a>
                </li>
                <li className='nav-item'>
                  <a className='nav-link' href=' '>Contacto</a>
                </li> 
                <li>
                 <a className='nav-link' href=' '>Productos</a>
                </li>
                <li>
                 <a className='nav-link' href=' '>Favoritos</a>
                </li>
               </ul>
            </div>
          </div>
          <CardWidget cantidad='(5)'/>
        </nav> 
        </header>
    )
}

export default Navbar