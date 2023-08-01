import React from 'react'
import './Accordian.css'
import { Card, Grid } from 'semantic-ui-react';
import { useState } from 'react';
export default function Films({data}) {
  const [columnsCount, setColumnsCount] = useState(3);
  const [activeButton, setActiveButton] = useState(''); 
  const handleOneColumn = () => {
    setColumnsCount(1);
    setActiveButton('togglebtn');
  };

  const handleThreeColumns = () => {
    setColumnsCount(3);
    setActiveButton('togglebtn2');
  };
  return (
    <div>
        <div className='grid'>
      <h1>Films</h1>
      <button className={`togglebtn ${activeButton === 'togglebtn' ? 'active' : ''}`} onClick={handleOneColumn}>
          List
        </button>
        <button className={`togglebtn2 ${activeButton === 'togglebtn2' ? 'active' : ''}`} onClick={handleThreeColumns}>
          Thumbnail
        </button>
      <Grid columns={columnsCount}>
      {data.map((films,i)=>{
        return(
          <Grid.Column key={i}>
            <Card>
              <Card.Content className='card_content'>
                <Card.Header className='card_content'>{films.title}</Card.Header>
                <Card.Description className='card_content'>
                  <strong>Director</strong>
                  <p>{films.director}</p>
                  <strong>Producer</strong>
                  <p>{films.producer}</p>
                  <strong>Release Date</strong>
                  <p>{films.release_date}</p>
                  <strong>Episode ID</strong>
                  <p>{films.episode_id}</p>
                  <strong>Opening</strong>
                  <p>{films.opening_crawl}</p>
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
