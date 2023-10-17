import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Implementation Administrator</title>
        <meta
          property="og:title"
          content="Dynamic Implementation Administrator"
        />
      </Helmet>
    </div>
  )
}

export default Home
