import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/">
      <p>Home</p>
      </Link>
      <p>Menu Icon to house menu items</p>
    </div>
  )
}

export default Nav
