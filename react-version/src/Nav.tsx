import React from 'react';
import { Button, Nav } from 'react-bootstrap';

export default function NavBar() {
    return (
        <Nav variant="tabs" defaultActiveKey="/">
            <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="{}">About</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="{}">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
                <Nav.Link href="{}">Badges/Certifications</Nav.Link>
            </Nav.Item>
        </Nav>
    )
}