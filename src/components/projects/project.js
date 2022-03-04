import React, { useState } from 'react';
import items from './allData';
import Menu from './Menu';
import Button from './Button';
import '../Home.css'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const allCategories = ['All', ...new Set(items.map(item => item.category))];

console.log(allCategories)

export default function Project() {
    const [menuItem, setMenuItem] = useState(items);
    const [buttons, setButtons] = useState(allCategories);
  
    //Filter Function
    const filter = (button) =>{
  
      if(button === 'All'){
        setMenuItem(items);
        return;
      }
  
      const filteredData = items.filter(item => item.category ===  button);
      setMenuItem(filteredData)
    }
  
  
    return (
    <div className="site-main">
      <section className="project-area" id='works'> 
         <div className="container">
         <div className="project-title pb-5">
                <Fade left cascade>
                  <h1 className="text-uppercase text-center  title-h1">Recently Done <br/> Project</h1>
                    <h1 className="text-uppercase text-center title-h1">Quality Work</h1>
                    </Fade>
                    <div className="button-group text-center">
                       <Button className="active" id="btn1" button={buttons} filter={filter} />
                    </div>
                    <div className="row grid">
                      
                      <Menu menuItem={menuItem}/>
                    
                    </div>
                </div>
         </div>
  
         
        
      

      </section>
      </div>
    );
}
