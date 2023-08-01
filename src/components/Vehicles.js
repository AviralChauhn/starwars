import './Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import React from 'react'
import { useState } from 'react';

export default function Vehicles({data}) {
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
      <h1>Vehicles</h1>
      <button className='togglebtn' onClick={handleOneColumn}>
          List
        </button>
        <button className='togglebtn2' onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((vehicles,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{vehicles.name}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Model</strong>
                  <p>{vehicles.model}</p>
                  <strong>Vehicle Class</strong>
                  <p>{vehicles.vehicle_class}</p>
                  <strong>Maximum Atmospheric Speed</strong>
                  <p>{vehicles.max_atmospheric_speed}</p>
                  <strong>Crew</strong>
                  <p>{vehicles.crew}</p>
                  <strong>Cost In Credits</strong>
                  <p>{vehicles.cost_in_credits}</p>
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
