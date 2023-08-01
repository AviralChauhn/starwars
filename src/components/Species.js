import './Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import React from 'react'
import { useState } from 'react';
export default function Species({data}) {
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
      <h1>Species</h1>
      <button className='togglebtn' onClick={handleOneColumn}>
          List
        </button>
        <button className='togglebtn2' onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((species,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{species.name}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Classification</strong>
                  <p>{species.classification}</p>
                  <strong>Designation</strong>
                  <p>{species.designation}</p>
                  <strong>Skin Color</strong>
                  <p>{species.skin_colors}</p>
                  <strong>Hair Colors</strong>
                  <p>{species.hair_colors}</p>
                  <strong>Average Lifespan</strong>
                  <p>{species.average_lifespan}</p>
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
