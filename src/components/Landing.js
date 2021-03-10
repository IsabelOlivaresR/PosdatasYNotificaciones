import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';



class Landing extends React.Component {

  render() {
    return (
      <div className='main'>
          <Header/>
         <div className='main__container'>
          <Link to="/letter"><div className='posdatas'></div></Link>
          <Link to="/whatsapp"><div className='whatsapp'></div></Link>
          </div> 
      </div>
    );
  }
}

export default Landing;