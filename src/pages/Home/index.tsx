import React from 'react';
import {Link} from 'react-router-dom';
import logoImg from '../../assets/logo.svg';
import { FiLogIn } from 'react-icons/fi';
import { Container, 
        Content,
        ContentHeader, 
        ContentMain,
        ContentMainTitle,
        ContentMainText,
        ContentButton,
        ButtonIcon,

      } from './styles';

const Home: React.FC = () => {
  return (
    <Container>
      <Content>
          <ContentHeader>
             <img src={logoImg} alt="Ecoleta" />
          </ContentHeader>
          <ContentMain>
            <ContentMainTitle>
                Seu marketplace de coleta de resíduos
            </ContentMainTitle>         

            <ContentMainText>
              Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente.
            </ContentMainText>

            <ContentButton>
                <ButtonIcon>
                    <FiLogIn/>
                </ButtonIcon>
              
                <Link to="/create-point">Cadastre um ponto de coleta</Link>
            </ContentButton>
          </ContentMain>
      </Content>
     
    </Container>

  )
}

export default Home;