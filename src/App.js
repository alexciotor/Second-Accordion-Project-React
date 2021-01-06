 import {FiPlus} from 'react-icons/fi'
 import {FiMinus} from 'react-icons/fi'
 import data from './data'
 import {useState} from 'react'
 import Accordion from './accordion'
console.log(data);
function App() {
  const [display, setDisplay ]  =useState(true)
 
  return (
  <main>
  <div className="main-container">
  <div className="left-side">
  <h4>questions and answers about login</h4>
  </div>
  
  <div className="right-side">
  {data.map(item=>{
     
    return (
<Accordion item ={item} />
    )
  })}
  
  </div>
  </div>
  </main>
  );
}

export default App;
