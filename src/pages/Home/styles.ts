import styled from 'styled-components';
import homeBackgroundImg from '../../assets/home-background.svg';

export const Container = styled.div`
  height: 100vh;
  background: url(${homeBackgroundImg}) no-repeat 600px bottom;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
 
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  
`;

export const ContentHeader = styled.header`
  margin: 48px 0 0;
`;

export const ContentMain = styled.div`
  flex: 1;
  max-width: 550px;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const ContentMainTitle = styled.text`
    font-family: Ubuntu;
    font-style: normal;
    font-weight: bold;
    font-size: 54px;
    line-height: 64px;
`;

export const ContentMainText = styled.text`
    margin-top: 24px;
    padding-right: 100px;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 38px;
    color: #6C6C80;
    
`;
 
export const ContentButton = styled.div`
    width: 100%;
    max-width: 360px;
    height: 72px;
    background-color: #34CB79;
    border-radius: 8px; 
    border-style: none;
    margin-top: 40px;
    display: flex;

    a {
      flex: 1;
      text-align: center;
      color: #FFF;
      text-decoration: none;
      padding-top: 25px;
      font-family: Roboto;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;

      &:hover {
        background: #2FB86E;
      }
    }
`;

export const ButtonIcon = styled.div`
    display: block;
    background: rgba(0, 0, 0, 0.08);
    width: 72px;
    height: 72px;

    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color 0.2s;

    svg {
      color: #FFF;
      width: 20px;
      height: 20px;
    }
`;


