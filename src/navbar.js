import React from 'react'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useContext,useEffect,useState } from 'react'
import { Cartcontext } from './context/shopcartcontext'

export const Navbar = () => {
const {cartItem}=useContext(Cartcontext)
const[p,setp]=useState(0)
 const tp=()=>{
  let p=0;
     cartItem.forEach((item) => {
        p=p+item.quantity;
  });
  setp(p)
 }
 useEffect(()=>{
  tp();
 },[cartItem])


  return <nav className='nav'>
   <ul>
       <h4>ARTIZ</h4>
      <li >
          <Link className='list' to="/">home</Link>
          <Link className='list' to="/cart">cart <small>({p})</small></Link>
          <Link className='list' to="/Usermanager">user</Link>
          <Link className='list' to="/addproduct">add</Link>
      </li>
   </ul>
  </nav>
}
export default Navbar