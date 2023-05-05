import React, {Component} from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavLink, NavItem, Container } from 'reactstrap';

class AppNavbar extends Component {
    state = {
        isOpen: false
    }
    menutoggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <Container >
                <Navbar dark expand="sm" className='rounded my-3'>
                    <NavbarBrand href="/">Zebu Fur</NavbarBrand>
                    <NavbarToggler onClick={this.menutoggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="">Contact</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </Container>
        );
    }
}

export default AppNavbar;