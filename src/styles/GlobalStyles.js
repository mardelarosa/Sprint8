import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial;
    background-color: black;
    color: white;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center; 
  }
`;

export default GlobalStyle;

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 20vh;
  background-color: black;  
`;





export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 220vh;
  background-color: black;  
`;


export const StarshipCard = styled.div`
  background-color: #404040;  
  padding: 20px;
  border-radius: 10px;  
  text-align: center;  
  color: white;  
  max-width: 500px;  
  margin: 0 auto;  
  margin-top: 20px;

  width: 50rem;  
  min-height: 7rem;
`;



export const StyledLink = styled(Link)`
display: block;  
color: white;    
text-decoration: none;  

`;


