import React from 'react'
import PropTypes from 'prop-types'

const Ola = ({nome}) => {
  return <span>Ola {nome}</span>
}

Ola.propTypes = {
  nome: PropTypes.string.isRequired
}

Ola.defaultProps = {
  nome: 'Fulano'
}

export default Ola
