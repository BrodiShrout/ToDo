import React from 'react'
//In this Login component we need access to the login function stored in our AuthContext.
//There are always 3 steps to implementing any of our context values
//Step 1: Import the useAuth function
import { useAuth } from '../../Context/AuthContext'
import { Container, Card } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

export default function Login() {
    //Step 2: destructure the needed object(s) off of the useAuth() function
    const { login } = useAuth()
    //we also want a way to redirect the user back home once they log in
    const navigate = useNavigate()

    //below we write a custom handler function to handle a user logging in
    async function handleAuth() {
        //Await keyword pauses any more code from executing until we get a response from firebase
        await login()

        //return the user to a specific location using useNavigate hook from react-router-dom
        return navigate('/')
    }

  return (
    //Step 3: Create the UI and use the login function as needed
    <div className='login'>
        <article className=" mb-5 p-5 text-white">
            <h1 className="text-center">Welcome to ResourcePlus!</h1>
        </article>
        <Container>
            <Card className='m-2 border-dark text-center'>
                <Card.Header className='bg-dark text-white'>
                    <h2>Login for full functionality</h2>
                </Card.Header>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => handleAuth()}>
                        Login w/ GitHub
                    </button>
                </Card.Body>
            </Card>
        </Container>
    </div>
  )
}
