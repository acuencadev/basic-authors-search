import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Container, Form, FormControl, Nav, Navbar} from "react-bootstrap";


export const SearchBarComponent = () => {
    const [query, setQuery] = useState('');
    const navigate = useNavigate();

    const handleChange = (evt) => {
        setQuery(evt.target.value);
    }

    const handleKeyDown = (evt) => {
        if (evt.key === "Enter") {
            performSearch();
        }
    };

    const performSearch = () => {
        if (query.trim() !== "") {
            navigate(`/search/${query}`);
        }
    }

    return (
        <Navbar bg="dark" expand="lg">
            <Container fluid>
                <Navbar.Brand href="/">Basic Authors Search</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }} />

                    <Form className="d-flex">
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            onChange={handleChange}
                            onKeyDown={handleKeyDown}
                        />
                        <Button variant="outline-success" onClick={performSearch}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
