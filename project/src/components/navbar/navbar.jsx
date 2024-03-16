import "./navbar.css";
import {useState} from "react";

function Navitem(props)
{
  // console.log(props.pass);
  console.log(props.children);
  return (
    <li className="nav-item" onClick={()=>{props.pass(props.children)}}>
      <div className="nav-link" style={{"color":"black"}} >{props.children}</div>
    </li>
  );

}

function Navbar(props)
{
  const [x, setX]=useState("hello");

  function onHandleclick(text)
  {
    setX(text);
    // console.log(text);
  }
  return (
    
    <div>
    <ul className="navbar">
      <Navitem pass={onHandleclick}>About</Navitem>
      <Navitem pass={onHandleclick}>Projects</Navitem>
      <Navitem pass={onHandleclick}>Contact</Navitem>

      
    </ul>
    {x}
    </div>
  );

}

export default Navbar;
