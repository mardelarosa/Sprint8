import React from "react";
import styled from "styled-components";
import { Banner } from "../components/Banner"
import { Link } from "react-router-dom";

const PageContainer = styled.div`
  display: flex;
  flex-direction: column; 
  justify-content: center; 
  align-items: center; 
  background-color: black; 
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50h;
  color: white;
  background-color: black;
  margin-bottom: 50px; 
  flex-direction: column;
  gap: 20px;
`;


const NavigateButton = styled(Link)`
  display: inline-block;
  background-color: gray;
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 30px;  
  font-size: 1.2rem;  
  border-radius: 5px; 
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);  
  }
`;



function Welcome() {
  return (
    
   <div>
      <PageContainer>
        <Banner />
        <Content>
          <h1>BENVINGUTS A LA PÀGINA D'INFORMACIÓ D'STAR WARS</h1>
          <NavigateButton to="/list">COMENÇA A NAVEGAR</NavigateButton>
        </Content>
      </PageContainer>
    </div>
  );
}

export default Welcome;
