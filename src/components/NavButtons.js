import { Link } from 'react-router-dom';
import styled from 'styled-components';

const NavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 10px 20px;
  background-color: #333;  
`;

const StyledLink = styled(Link)`
  margin-left: 10px;
  text-decoration: none;
  color: white;  
  &:hover {
    text-decoration: underline;
  }
`;

const NavButtons = () => {
  return (
    <NavBarContainer>
      <StyledLink to="/login">Login</StyledLink>
      <StyledLink to="/register">Register</StyledLink>
    </NavBarContainer>
  );
};

export default NavButtons;
