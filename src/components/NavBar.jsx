
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <div class="navbar">
    <nav>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      <NavLink to="/actors">Actors</NavLink>
    </nav>
    </div>
  );
}

export default NavBar;
