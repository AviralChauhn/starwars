import React from 'react'
import './Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import { useState } from 'react';
export default function Starships({data}) {
  const [columnsCount, setColumnsCount] = useState(3);

  const handleOneColumn = () => {
    setColumnsCount(1);
  };

  const handleThreeColumns = () => {
    setColumnsCount(3);
  };
  return (
    <div>
        <div className='grid'>
      <h1>StarShips</h1>
      <button className='togglebtn' onClick={handleOneColumn}>
          List
        </button>
        <button className='togglebtn2' onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((starships,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{starships.name}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Model</strong>
                  <p>{starships.model}</p>
                  <strong>Cost in Credits</strong>
                  <p>{starships.cost_in_credits}</p>
                  <strong>Manufacturer</strong>
                  <p>{starships.manufacturer}</p>
                  <strong>Max atmospheric Speed</strong>
                  <p>{starships.max_atmospheric_speed}</p>
                  <strong>Crew</strong>
                  <p>{starships.crew}</p>
                </Card.Description>
              </Card.Content>
            </Card>
          </Grid.Column>
        )
      })}
      </Grid>
      </div>
      {/* You can create a button to navigate back to the home page if needed */}
      <button className='sidebarhome' onClick={() => window.location.href = '/'}>Go back to Home</button>
    </div>
  )
}
