function Navbar(props)
{
  return (
    <div>
      <p>{props.isloggedin ? "welcome":"Please login"}</p>
    </div>

  );

}

export default Navbar;