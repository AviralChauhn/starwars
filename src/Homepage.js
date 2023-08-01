import React from 'react'
import Accordian from './Accordian.js'
import darthwader from './assets/imgs/darthwaderback.png'
import logo from './assets/imgs/pngwing.com.png'
function Homepage() {
  return (
    <div>
      <img src={darthwader} className='intropic' border-radius='15px'/>
      <div className='intro'>
        <h2>Welcome to Star Wars dashboard<br></br></h2>
          Star Wars is an American epic space opera multimedia franchise created by<br></br> George Lucas, which
          began with the eponymous 1977 film and quickly became <br></br>a worlwide pop culture phenomenon.
      </div>
    </div>
  )
}
 export default Homepage ;