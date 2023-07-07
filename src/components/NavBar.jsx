import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";



const menu = [
    {text: "Home", link: "/#home"},
    {text: "Products", link: "/#products"},
    {text: "Wish List", link: "/#wishlist"},
    {text: "Bag", link: "/#bag"},
]

export const NavBar = () => (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">LSKN</Navbar.Brand>
                <Nav className="me-auto">
                    {menu.map(item => (
                        <Nav.Link key={item.text} href={item.link}>{item.text}</Nav.Link>
                    ))}
                </Nav>
                <CartWidget />
            </Container>
        </Navbar>
)