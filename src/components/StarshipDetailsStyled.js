import styled from 'styled-components';

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: black;  
  text-transform: uppercase;
`;

export const ContainerTop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  
`;

export const SubContainers = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem; 
`;

export const SubContainerLeft = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;  
  width: 48%; 
  
`;

export const SubContainerRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; 
  width: 48%; 
  
`;

export const FullyCentContainer = styled(DetailsContainer)`
  align-items: center; 
`;