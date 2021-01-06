 import {useState} from 'react'
  import {FiPlus} from 'react-icons/fi'
 import {FiMinus} from 'react-icons/fi'
const Accordion =({item})=>{
      const [display, setDisplay ]  =useState(true)
    const {id,info, title} = item
return (
    <article className="article">
  <div className="art-title">
  <h3>{title}</h3>
  <span className="span-btn"><button onClick={()=>{
    setDisplay(!display)
  }} className="btn">{display ? <FiPlus/> : <FiMinus/> }</button></span>
  </div>
  {display && <p>{title}</p>} 
  </article>
)
}

export default Accordion