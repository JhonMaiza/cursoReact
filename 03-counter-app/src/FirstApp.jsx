import PropTypes from 'prop-types';

// si no hay dependencia de los componente se debe sacar del funcional component
const funcion = (a, b) => {
  console.log('hola');
  return a + b;
}

const newMessage = {
  message: 'hola',
  titulo: 'Jhon'
}

export const FirstApp = ( { title, subtitle, nombre} ) => {
  
  return (
    <>
      {/* <code>{ JSON.stringify(newMessage)</code>  } */}
      <h1 data-testid="test-title">{ title }</h1>
      <p data-testid="test-subtitle">{subtitle}</p>
      <p data-testid="test-subtitle">{subtitle}</p>
      <p>{nombre}</p>
      {/* {funcion(2, 3)} */}
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.number.isRequired
}

// defaul van antes de los propTypes
// FirstApp.defaultProps = {
//   title: 'No hay título',
//   subtitle: 'No hay subtitulo',
//   nombre: 'Pedro'
// }
