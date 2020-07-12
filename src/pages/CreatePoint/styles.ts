import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface PreviewProps {
  src: string;
}

export const Container = styled.div`
  height: 100vh;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 30px;
  display: flex;
  flex-direction: column;
  
`;

export const Header = styled.div`
  margin: 48px 0 0;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #322153;
    font-size: 16px;
    font-family: Roboto;

    svg {
      margin-right: 10px;
      color: #34CB79;
    }
  }
`;

export const FormContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  
  

  form {
    margin: 80px auto;
    padding: 64px;
    max-width: 730px;
    background: #FFF;
    border-radius: 8px;

    display: flex;
    flex-direction: column;

    h1 {
      font-weight: bold;
      font-size: 36px;
      line-height: 46px;
    }

    button {
      background: #34CB79;
      border-radius: 8px;
      width: 256px;
      height: 56px;
      align-self: flex-end;
      margin-top: 30px;
      color: #FFF;
      font-weight: bold;
      font-size: 16px;
      line-height: 19px;
      border: 0;
      transition: background 0.3s;

      &:hover {
        background: ${shade(0.2, '#2FB86E')};
      }
    }
  }
`;

export const ImagemInput = styled.div`
  margin-top: 30px;
  border-radius: 8px;
  width: 608px;
  height: 304px;
  align-self: center;
  background: #E1FAEC;
  display: flex;
  align-items: center;
  justify-content: center;
  
  div {
    width: 544px;
    height: 240px;
    border: 1px dashed #34CB79;
    box-sizing: border-box;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label {
        width: 48px;
        height: 48px;
        cursor: pointer;
        border-radius: 10px;
        transition: background-color 0.2s;
        display: flex;
        align-items: center;
        justify-content: center;
        right: 0;
        bottom: 0;
        border: 0;

        svg {
          width: 20px;
          height: 20px;
          color: #34CB79;
        }

        &:hover {
          background: #FFF;
        }

        input {
          display: none;
        }
    }
    
    span {
      font-family: Roboto;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 19px;
      color: #322153;
    }
  }
`;

export const Preview = styled.img<PreviewProps>`
    display: none;
    width: 100px;
    height: 100px;
    border-radius: 8px;
    ${(props) => props.src !== '' && css`
      display: flex;
      background-image: url(${props.src});
      `}
     
`;

export const DataContainer = styled.fieldset`
    flex: 1;
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 730px;

    legend {
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #322153;
    }

    label {
      font-size: 14px;
      line-height: 16px;
      color: #6C6C80;
  
    }

    input {
      width: 100%;
      background: #F0F0F5;
      border-radius: 8px;
      border: 0;
      padding: 16px 24px;
      font-size: 16px;
      color: #6C6C80;
      margin: 5px 0 20px 0;
    }
`;

export const AddressContainer = styled.div`
    margin-top: 64px;
    border: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 730px;
    
    legend {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #322153;

      span {
        color: #6C6C80;
        font-size: 14px;
        font-weight: normal;
      }
    }

    div#field-group-container {

        display: flex;
        justify-content: space-between;

        div.field-group {
        display: flex;
        width: 100%;
        flex-direction: column;
        align-items: flex-start;

            label {
              font-size: 14px;
              line-height: 16px;
              color: #6C6C80;
              padding-bottom: 5px;
          
            }
        }

        div.field-group + .field-group {
          margin-left: 20px;
        }
    }

    .leaflet-container {
      width: 100%;
      height: 350px;
      border-radius: 8px;
      margin-bottom: 24px;
    }
`;

export const LeafletContainer = styled.div`
    
`;


export const ItemsContainer = styled.div`
    flex: 1;
    margin-top: 64px;
    min-inline-size: auto;
    border: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 730px;

  legend {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 40px;
      font-weight: bold;
      font-size: 24px;
      line-height: 28px;
      color: #322153;

      span {
        color: #6C6C80;
        font-size: 14px;
        font-weight: normal;
      }
    }

    ul {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
      list-style: none;

      li {
        background: #f5f5f5;
        border: 2px solid #f5f5f5;
        height: 180px;
        border-radius: 8px;
        padding: 32px 24px 16px;

        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;

        text-align: center;

        cursor: pointer;
      }

      li.selected {
        background: #E1FAEC;
        border: 2px solid #34CB79;
      }
    }
`;

