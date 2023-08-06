import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="text-center page-container container">
        <h1>Welcome to the App Name</h1>
        <Link className="btn btn-primary" to="/survey">Start Survey</Link>
    </div>
  )
}

export default Home