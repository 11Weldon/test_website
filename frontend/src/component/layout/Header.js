import { Component } from 'react';
import { Menu, Input, Icon, Label } from 'semantic-ui-react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { useState, useEffect} from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'

export function Header(){
        const [isAuth, setIsAuth] = useState(false);

        useEffect(() => {
            if (localStorage.getItem('access_token') !== null) {
                setIsAuth(true);
            }
        }, [isAuth]);


        return (
                <div>

                    <Navbar className="header" bg="dark" variant="dark">
                        <Navbar.Brand href="/">MARHI STORE</Navbar.Brand>
                        <Nav className="me-auto">
                            {isAuth ?
                                <Nav.Link href="/">Главная страница</Nav.Link>
                                : null}
                        </Nav>
                        <Nav className="link">
                            <Nav.Link href="/catalog">Каталог</Nav.Link>
                            {isAuth ?
                                <Nav.Link href="/logout">Выход</Nav.Link>:
                                <Nav>
                                    <Nav.Link href="/login">Вход</Nav.Link>
                                    <Nav.Link href="/register">Регестрация</Nav.Link>
                                </Nav>
                            }
                        </Nav>
                    </Navbar>

                </div>
        );

}

export default Header;
