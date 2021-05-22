import React, { Component } from 'react';
import {Navbar, Container, NavbarBrand} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

class Footer extends Component{
    render() {
        return(
            <div className="fixed-bottom">  
                <Navbar collapseOnSelect expand="lg" variant="dark" style={{ width: '100%', height:'50px' }} >
                    <Container className='footer'>
                        <NavbarBrand style={{ textAlign: "center", flex: '1' }}>Footer</NavbarBrand>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer