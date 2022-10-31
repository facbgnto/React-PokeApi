import { NavLink } from "react-router-dom";
import { Navbar, Container, nav } from "react-bootstrap";
import Logo from '../assets/img/logo3.jpg'
import '../App.css'

export default function Navegation() {

  const setActiveClass = ({ isActive }) => (isActive ? "active" : "no-active");
  return (

      <>
      <Navbar bg="warning" variant="danger">
          <Container>
              <Navbar.Toggle />
              <img src={Logo} height={45}></img>
              <Navbar.Collapse className="justify-content-end">

              <NavLink className={setActiveClass} className="px-3" to="/" end>
                      Home
                  </NavLink >
                  <NavLink className={setActiveClass} to="/Pokemones">
                      Pokemones
                  </NavLink>
              </Navbar.Collapse>
             
          </Container>
      </Navbar>
      </>
  );
}
