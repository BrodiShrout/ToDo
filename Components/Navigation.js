import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useAuth } from '../Context/AuthContext'

export default function Navigation() {
  const {currentUser} = useAuth()

  return (
    <Navbar expand='md' variant='dark' bg='dark' className='p-3'>
         <Navbar.Brand href='/'>ReactJS ToDo</Navbar.Brand>
        <Navbar.Toggle/>
        <Navbar.Collapse className='justify-content-end'>
            <Nav>
              {currentUser &&
                <Link to='./ToDo' className='nav-link'>ToDo</Link>
              }
                <Link to='./Categories' className='nav-link'>Categories</Link>
                <Link to='./About' className='nav-link'>About</Link>
                {!currentUser &&
                <Link to='/login' className='nav-link'>Login</Link>
                }
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}
