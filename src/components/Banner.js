import styled from "styled-components";
import bannerImage from '../assets/star-wars-banner.jpg';

export const Banner = styled.div`
  background-image: url(${bannerImage});
  background-size: cover;
  background-color: black; 
  height: 300px;
  width: 50%;
  margin: 0 auto;  
`;