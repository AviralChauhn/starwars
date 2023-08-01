import React from 'react';
import './Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import { useState } from 'react';
function Planets({data}) {
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
      <h1>Planets</h1>
      <button className='togglebtn' onClick={handleOneColumn}>
          List
        </button>
        <button className='togglebtn2' onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((planets,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{planets.name}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Rotation Period</strong>
                  <p>{planets.rotation_period}</p>
                  <strong>Orbital Period</strong>
                  <p>{planets.orbital_period}</p>
                  <strong>Diameter</strong>
                  <p>{planets.diameter}</p>
                  <strong>Climate</strong>
                  <p>{planets.climate}</p>
                  <strong>Gravity</strong>
                  <p>{planets.gravity}</p>
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
  );
}

export default Planets;