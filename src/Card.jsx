import React from 'react'
import './card.css'

function Card () {
        return (
    <div className='card-page px-2 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>

    <div className="mx-2 wrapper">
    <div className="card">
    <h1>
      <span className="enclosed">Secondary Listing Post Mint</span>ME/ DE
    </h1>
  </div>
</div>&nbsp;&nbsp;

<div className="mx-2 wrapper">
  <div className="card1">
    <h1>
      <span className="enclosed">Future</span>Community/<br/>DAO<br/>Gamification<br/>
    </h1>
  </div>
</div>&nbsp;&nbsp;

<div className="mx-2 wrapper">
  <div className="card2">
    <h1>
      <span className="enclosed">Perks</span><br/>Neural Art Airdrops<br/>Project Collabs
    </h1>
  </div>
</div>
    </div>
        )
    }
    export default Card;

