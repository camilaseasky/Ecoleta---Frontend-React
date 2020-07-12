import React from 'react';
import { Container } from './styles';
import { FiCheckCircle } from 'react-icons/fi';

const PointCreated: React.FC = () => {

  return (
    <Container>
      <FiCheckCircle />
      <h1>Cadastro concluído!</h1>
    </Container>
  )

}

export default PointCreated;