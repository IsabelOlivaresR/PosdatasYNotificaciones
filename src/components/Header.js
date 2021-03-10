import React from 'react';
import { Link } from 'react-router-dom';



class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isPosdatasClicked: false,
      isNotificacionesClicked: false
    }
    this.showLetters =this.showLetters.bind(this)
    this.showWhatsapps =this.showWhatsapps.bind(this)
    this.closeLetters =this.closeLetters.bind(this)
    this.closeWhatsapps =this.closeWhatsapps.bind(this)
  }
  showLetters (e) {
    e.preventDefault()
    this.setState({isPosdatasClicked:true}, () => {
      document.addEventListener('click', this.closeLetters);
    })
    

  }
  showWhatsapps (e) {
    e.preventDefault()
    this.setState({isNotificacionesClicked:true}, () => {
      document.addEventListener('click', this.closeWhatsapps);
    })

  }
  closeLetters () {
    this.setState({isPosdatasClicked: false}, () => {document.removeEventListener('click', this.closeLetters)})

  }
  closeWhatsapps () {
    this.setState({isNotificacionesClicked: false}, () => {document.removeEventListener('click', this.closeWhatsapps)})

  }
  render() {
    return (
      <header className='header'>
          <nav>
             <ul className='header__menu'>
                <li onClick={this.showLetters} >Posdatas <i className="fas fa-feather-alt"></i></li>
                <li onClick={this.showWhatsapps}>Notificaciones <i className="fab fa-whatsapp"></i></li>
             </ul> 
          </nav>
          {this.state.isPosdatasClicked ?  (<ul className="letterIndex">
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            <Link to="/letter"><li className='letterIndex__item'>17 de enero de 1973</li></Link>
            </ul>) : (null)}
         {this.state.isNotificacionesClicked ? (<ul className="whatsappIndex">
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           <Link to="/whatsapp"><li className='whatsappIndex__item'>17/01/2020</li></Link>
           </ul>) : (null)}
      </header>
    );
  }
}

export default Header;