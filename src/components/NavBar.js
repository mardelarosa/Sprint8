import { Link } from 'react-router-dom';
import styled from 'styled-components';

// Estilos
const NavBarContainer = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledList = styled.ul`
  display: flex;
  list-style: none;  
  padding: 0;
  margin: 0;
`;

const StyledListItem = styled.li`
  margin: 0 10px;  
`;

const StyledLink = styled(Link)`
  text-decoration: none;  
  color: white; 
  text-transform: uppercase;  
  padding: 10px 15px; 
  display: block; 
  transition: background-color 0.3s ease;  

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);  
  }
`;

// Componente
const NavBar = () => (
  <NavBarContainer>    
    <StyledList>
      <StyledListItem><StyledLink to="/">Home</StyledLink></StyledListItem>
      <StyledListItem><StyledLink to="/list">Starships</StyledLink></StyledListItem>
    </StyledList>
  </NavBarContainer>
);

export default NavBar;
