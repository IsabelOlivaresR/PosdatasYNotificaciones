import React from 'react';
import { Link } from 'react-router-dom';


class Letter extends React.Component {
  render() {
    return (
      <div className='mainl'>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/gFcIKbZ9Tx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div class='mainl__letter'>
          <p className='mainl__letter__date'>18 de enero de 1973</p>
          <p className='mainl__letter__main'>Hola, Luisita. </p>
          <p className='mainl__letter__main'> </p>
          
          <p className='mainl__letter__main'></p>
          <p className='mainl__letter__main'></p>
          </div>
      </div>
    );
  }
}

export default Letter;
