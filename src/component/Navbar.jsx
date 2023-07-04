import React from 'react';
// import '../styles/navbar.css';
import {Link} from 'react-router-dom'
import './navbar.css'
                
const Navbar = () => {
  return (
    

<div className='main'>
<div className='nav'>
  <Link to='/Rahul'><div className="logo">Rahul Arora</div></Link> 
   <div className="content">
       <ul>
         <Link to='/'><li>Home</li></Link>  
         <Link to='/product'><li >Product</li></Link>    
         <Link to='/cart'><li >Add To Cart: <b></b> </li></Link>  
        
         
       </ul>
   </div>
</div>
</div>
  )
}

export default Navbar