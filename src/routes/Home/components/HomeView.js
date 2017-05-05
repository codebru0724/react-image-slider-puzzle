import React from 'react'
import { IndexLink, Link } from 'react-router'
import './HomeView.scss'


export const HomeView = () => (
  <div>
    <h1>Enjoy My Image Slidding Puzzle Game</h1>
    <h4>Welcome!</h4>
    <Link to='/game' type="button">
      Game
    </Link>

  </div>
)

export default HomeView
