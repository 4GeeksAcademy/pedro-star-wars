import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { useContext } from "react";
import { FavoritesContext } from "../contexts/Favorites";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";



function NavBar() {
  const { favorites, deleteFavorite, addToFavorites } = useContext(FavoritesContext);
  const navigate = useNavigate()
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Favorites" id="basic-nav-dropdown">
              {favorites.map((favorite) => (
                <div
                  className="d-flex justify-content-between align-items-center px-3"
                >
                  <NavDropdown.Item onClick={() => navigate(`/details/${favorite.type}/${favorite.id}`)}>
                    {favorite.name}
                  </NavDropdown.Item>
                  <Button
                    variant="outline-danger"
                    size="sm"
                    onClick={() => deleteFavorite(favorite.id,favorite.type)}
                  >
                    X
                  </Button>
                </div>
              ))}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;