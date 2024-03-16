import "./navbar.css"

function Navitem(props)
{
  console.log(props.pass);
  return (
    <li className="nav-item" onClick={()=>{props.pass(props.children)}}>
      <div className="nav-link" style={{"color":"black"}} >{props.children}</div>
    </li>
  );

}

function Navbar(props)
{
  function onHandleclick(text)
  {
    console.log(text);
  }
  return (
    
    <ul className="navbar">
      <Navitem pass={onHandleclick}>About</Navitem>
      <Navitem pass={onHandleclick}>Projects</Navitem>
      <Navitem pass={onHandleclick}>Contact</Navitem>
    </ul>
  );

}

export default Navbar;
