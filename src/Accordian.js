import React, { useState } from 'react';
import './components/Accordian.css';
import folder from './assets/imgs/folder.png'
import arrow from './assets/imgs/arrow.png'
function Accordion({ items }) {
   const [activeIndex, setActiveIndex] = useState(-1);
   const handleClick = (index) => {
      setActiveIndex(index === activeIndex ? -1 : index);
   };
   const isArrowUp = (index)=> activeIndex ==index;
   return (
      <div>
         {items.map((item, index) => (
            <div key={item.title}>
               <button onClick={() =>handleClick(index)}>
                  <img src={folder} className='folderlogo'/>
                  {item.title}
                  <img src={arrow} className={`arrow-icon ${isArrowUp(index) ? 'up' : ''}`} height='10px' width='10px'/>
                  </button>
               {index === activeIndex && <div className='accordian-content'>{item.content}</div>}
              
            </div>
         ))}
      </div>
   );
}
export default Accordion;