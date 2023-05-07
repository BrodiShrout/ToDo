import React from 'react'
import './About.css'

export default function About() {
  return (
    <section className="abouts">
    <article className="p-5 pop">
        <h2 className='text-center text-dark'>About</h2>
      <div className='p'>
        <p > 
          <strong>About Me:</strong>
          <br />
          I am a passionate and hard working young woman with a passion for coding and web design, I spent 4 months learning how to code from instructures during my time in the Centriq Full-Stack Coding program where I built multiple professional websites, before entering the program I had been teaching myself how to code for the last 2 years.
          <br/>
          <strong>Why we did this assignment:</strong>
          <br />
          The React To Do Application is a portfolio project that will allow you to showcase your ability to build single page applications using React JS.  The application will allow users to sign in and see items on their to do list.  Users will be able to add, edit, delete, or mark to do items as complete.  This application will leverage the .NET Web API as the backend of the application.
        </p>
        </div>
      </article>
    </section>
  )
}
