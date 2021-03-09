import React from 'react';
import { Link } from 'react-router-dom';



class Header extends React.Component {
  render() {
    return (
      <header className='header'>
          <nav>
             <ul className='header__menu'>
                <Link to="/letter"><li >Posdatas <i class="fas fa-feather-alt"></i></li></Link>
                <Link to="/whatsapp"><li >Notificaciones <i class="fab fa-whatsapp"></i></li></Link>
             </ul> 
          </nav>
      </header>
    );
  }
}

export default Header;