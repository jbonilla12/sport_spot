import React from 'react'
import {Navbar, Nav, NavDropdown,Container} from 'react-bootstrap'
import { BrowserRouter as Router, withRouter, Link } from 'react-router-dom';
import { auth } from '../firebase';

export const NavbarComp= (props) => {

    const cerrarSesion= ()=>{
        auth.signOut()
        .then(()=>{
            props.history.push('/')
        })
    }
    return (
        <div className="row">
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand as={Link}to="/">Sport Spot Honduras</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                    <Navbar.Collapse id="basic-navbar-nav">
                    {
                        props.firebaseUser !==null ? (
                    
                        <Nav className="me-auto">
                            <Nav.Link  as={Link} to={"/admin/ligas"}><i className="fal fa-trophy"></i> Ligas</Nav.Link>
                            <Nav.Link as={Link} to={"/admin/equipos"}><i className="fal fa-users"></i> Equipo</Nav.Link>
                            <Nav.Link as={Link} to={"/admin/temporadas"}><i className="fal fa-windsock"></i> Temporada</Nav.Link>
                            <Nav.Link as={Link} to={"/admin/productos"}><i className="fal fa-tshirt"></i> Producto</Nav.Link>
                            <NavDropdown title="Detalles de Indumentaria" id="basic-nav-dropdown">
                                <NavDropdown.Item as={Link} to={"/admin/parche"}>Parche</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/admin/generos"}>Genero</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/admin/genero-deportivo"}>Genero Deportivo</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/admin/mangas"}>Manga</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to={"/admin/tallas"}>Talla</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link as={Link} to={"/admin/estado-ventas"}><i className="fal fa-store-alt"></i> Estado de venta</Nav.Link>
                            <Nav.Link as={Link} to={"/admin"}><i className="fal fa-user"></i> Usuarios</Nav.Link>
                        </Nav>
                        

                        ):null
                    }
                    </Navbar.Collapse>
                    {
                        props.firebaseUser!== null && (
                            <Nav>
                                <Nav.Link onClick={()=>cerrarSesion()}
                                ><i className="fal fa-sign-out"></i> Cerrar Sesion</Nav.Link>
                            </Nav>
                        )
                    }
                    </Container>
                </Navbar> 
            
        </div>
    )
}
export default withRouter(NavbarComp)
