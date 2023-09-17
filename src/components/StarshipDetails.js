import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import defaultImage from '../assets/starship-default.jpeg'
import {
  FullyCentContainer,
  DetailsContainer,
  ContainerTop,
  SubContainers,
  SubContainerLeft,
  SubContainerRight
} from './StarshipDetailsStyled';

const StarshipDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const imageUrl = `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`;
  

  const handleImageError = (e) => {
    e.target.onerror = null; 
    e.target.src = defaultImage;
  }

  useEffect(() => {
    axios.get(`https://swapi.dev/api/starships/${id}/`)
      .then(response => {
        setDetails(response.data);
      })
      .catch(error => {
        console.error("Error fetching starship details:", error);
      });
  }, [id]);

  if (!details) {
    return <FullyCentContainer>Loading...</FullyCentContainer>;
  }

  return (
    <div>

      <DetailsContainer>
        <ContainerTop>
      <h1>{details.name}</h1>
      <img src={imageUrl} alt="Starship" onError={handleImageError}/>
     
      
      <p>Model: {details.model}</p>
      <p>Manufacturer: {details.manufacturer}</p>
      <p>Cost: {details.cost_in_credits} CREDITS</p>
      </ContainerTop>
    
      <SubContainers>
      <SubContainerLeft>
      <p>Crew: {details.crew}</p>
      <p>Passenger Capacity: {details.passengers}</p>
      <p>Cargo Capacity: {details.cargo_capacity} TONS </p>
      <p>Consumables: {details.consumables} </p>
      </SubContainerLeft>

      <SubContainerRight>
      <p>Length: {details.length} METERS</p>
      <p>Maximum Atmosphering Speed: {details.max_atmosphering_speed} KM/H</p>
      <p>Hyperdriver Rating: {details.hyperdrive_rating}</p>
      
      <p>Maximum Speed in real Space: {details.MGLT} MGLT</p>
    
      </SubContainerRight>

      </SubContainers>
      </DetailsContainer>
    </div>
  );
};

export default StarshipDetails;
