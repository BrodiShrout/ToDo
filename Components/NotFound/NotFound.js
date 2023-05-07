import React from 'react'
import Image from '../../Images/404.jpg'
import './notFound.css'

export default function NotFound() {
  return (
    <div className='notFound'>
        <img src={Image} alt='Resource not found' />
        <h1 className='text-dark'>Resource Not Found</h1>
    </div>
  )
}