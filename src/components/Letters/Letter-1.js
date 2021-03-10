import React from 'react';
import Header from '../Header';



class Letter extends React.Component {
  render() {
    return (
      
      <div className='mainl'>
          <Header/>
          <iframe className="mainl__video"  src="https://www.youtube.com/embed/gFcIKbZ9Tx4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          <div className='mainl__letter'>
          <p className='mainl__letter__date'>18 de enero de 1973</p>
          <p className='mainl__letter__main'>Hola, Luisita. </p>
          <p className='mainl__letter__main'>Te escribo porque sé que te estarán escamando tantas excusas de mi familia cada vez que llamas a casa. Así que aquí te cuento la verdad.</p>
          
          <p className='mainl__letter__main'>Mi padre me tiene retenida, castigada, a mi edad. Estoy tan enfadada que no se me ocurre la forma de escaparme a pesar de que otras tantas veces lo he hecho ya. Tengo la mente nublada y creo que esto es muy injusto. La última vez que nos vio se enfadó tanto que ha decidido no volver a dejarme salir si no es para tener citas con hombres.</p>
          <p className='mainl__letter__main'>Esa maldita manía suya de que me case cuando es algo que ahora mismo no me interesa lo más mínimo me tiene muy cansada. No se dan cuenta que yo lo que quiero es ser libre y disfrutar de todo lo que me rodea, de los demás chicos y chicas de mi edad, de Madrid, y de ti, Luisita. Que te has convertido en mi mejor amiga y ya me cuesta pasar los días sin al menos hablar contigo una vez. Eres la única persona capaz de entenderme de verdad, me escuchas, me aconsejas y te preocupas por mí como nadie lo ha hecho nunca, ni siquiera mi propia familia. Y me niego a estar sin verte mucho tiempo más, por eso te prometo que pensaré algo lo más pronto posible. Ya sabes que tenemos muchos planes pendientes y no pienso renunciar a ellos por nada en el mundo.</p>
          <p className='mainl__letter__main'>Haber ido a aquella fiesta de niños de papá (bueno, tú y yo también lo somos un poco, pero no tan tontas como ellos) es lo mejor que he hecho en estos últimos tres meses. Desde que te conocí allí me has abierto los ojos a un mundo nuevo dónde las chicas también tenemos derecho a quejarnos y a vivir una vida diferente a la que se nos impone por nuestra condición social.</p>
          <p className='mainl__letter__main'>Y eso es lo que más le molesta a mi padre. Mis ansias de libertad y el hecho de que haya encontrado una amiga como tú que las comparta conmigo. </p>
          <p className='mainl__letter__main'>Te hago llegar esta carta para avisarte de mi situación, pero sé que encontraré una solución para todo esto lo más pronto posible y podremos vernos para ir a ese sitio del que hablamos.</p>
          <p className='mainl__letter__main'>Espero que las cosas en tu familia estén bien y si te apetece responderme solo tienes que contactar a mi hermano para que haga de intermediario entre nosotras y me haga llegar tu carta igual que espero que te haga llegar la mía sin ningún problema.</p>
          <p className='mainl__letter__main'>Un abrazo fuerte, amiga. </p>
          <p className='mainl__letter__main'>Te quiere, Amelia. </p>
          <p className='mainl__letter__main'></p>
          <p className='mainl__letter__main'></p>
          </div>
      </div>
    );
  }
}

export default Letter;
