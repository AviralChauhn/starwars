import React from 'react';
import './components/Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import { useState } from 'react';
function OtherPage({data}) {
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
      <h1>People</h1>
      <button className='togglebtn' onClick={handleOneColumn}>
          List
        </button>
        <button className='togglebtn2' onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((people,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{people.name}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Height</strong>
                  <p>{people.height}</p>
                  <strong>Mass</strong>
                  <p>{people.mass}</p>
                  <strong>Hair Color</strong>
                  <p>{people.hair_color}</p>

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

export default OtherPage;