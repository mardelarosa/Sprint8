import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Banner } from './Banner';
import { ListContainer, StarshipCard, StyledLink } from '../styles/GlobalStyles';


const StarshipList = () => {
  const [starships, setStarships] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState(null);
  const [previousPageUrl, setPreviousPageUrl] = useState(null);

  useEffect(() => {
    const loadStarships = async () => {
      try {
        const response = await axios.get(`https://swapi.dev/api/starships/?page=1`);
        setStarships(response.data.results);
        setNextPageUrl(response.data.next);
        setPreviousPageUrl(response.data.previous);
      } catch (error) {
        console.error("Error fetching starships:", error);
      }
    };

    loadStarships();
  }, []);

  const handlePagination = async (url) => {
    try {
      const response = await axios.get(url);
      setStarships(response.data.results);
      setNextPageUrl(response.data.next);
      setPreviousPageUrl(response.data.previous);
    } catch (error) {
      console.error("Error fetching starships:", error);
    }
  };


  return (
    <div style={{ paddingBottom: '50px' }}>
      <Banner />
      <ListContainer>
        <h1>STARSHIPS</h1>
       

          {starships.map((starship) => {
            const starshipId = starship.url.match(/(\d+)/)[0];
            return (
              <div key={starshipId}>
                <StarshipCard>
                <StyledLink to={`/starships/${starshipId}`}>
                  <h2>{starship.name.toUpperCase()}</h2>

                  <p>{starship.model}</p>

                </StyledLink>
                </StarshipCard>
              </div>
      
        );
      })}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '60px' }}>
          {previousPageUrl && <button onClick={() => handlePagination(previousPageUrl)}>Anterior</button>}
          {nextPageUrl && <button onClick={() => handlePagination(nextPageUrl)}>Siguiente</button>}
        </div>


      </ListContainer>
    
     
    </div>
  );
};

export default StarshipList;
