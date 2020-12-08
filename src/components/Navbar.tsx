import React from 'react';

import {Link} from 'react-router-dom';
import { Button,Form,Container,Nav,Navbar} from 'react-bootstrap';

import '../styles/Navbar.css';

export default function NavbarComponet (){
    return (
        
        <Navbar  collapseOnSelect expand="lg" bg="dark" variant="dark" >
            <Nav className="mr-auto">
                <Nav.Link href="/">Pacientes</Nav.Link>
                <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                <Nav.Link href="/marcacao">Marcações</Nav.Link>
                
            </Nav>
            
        </Navbar>
        
    );
}

/*

            <Nav className="navbar navbar-light bg-light">
            <Container className="container-fluid">
                <Form className="d-flex">
                    <Form.Group>
                        <Form.Control className="form-control me-2" type="search" placeholder="Search" aria-label="Search">

                        </Form.Control>
                    </Form.Group>
                    
                        <Button className="btn btn-outline-success" type="submit">Search</Button>
                </Form>
            </Container>
        </Nav>



        <Nav className="navbar navbar-dark bg-primary" >
                <ul className="nav nav-pills">
                    <li >
                        <Link className="nav-link" to="/cadastro">Cadastro</Link>
                    </li>
                    <li >
                        <Link className="nav-link" to="/">Consulta</Link>
                    </li>
                    <li >
                        <a className="nav-link" href="#">Marcações</a>
                    </li>
                    <li >
                        <a className="nav-link" href="#">Remarcações </a>
                    </li>
                </ul>
            </Nav>


            <Container className="container-fluid">
            
            <Navbar  expand="xl" bg="dark" variant="dark" >
                <Nav className="mr-auto">
                    <Nav.Link href="/">Pacientes</Nav.Link>
                    <Nav.Link href="/cadastro">Cadastro</Nav.Link>
                    <Nav.Link href="/marcacao">Marcações</Nav.Link>
                    <Nav.Link href="#pricin">Remarcações</Nav.Link>
                </Nav>
                <Form inline>
                    <Form.Control type="text" placeholder="Pesquisar" className="mr-sm-2" />
                    <Button variant="outline-light">Pesquisar</Button>
                </Form>
            </Navbar>
        </Container>
*/