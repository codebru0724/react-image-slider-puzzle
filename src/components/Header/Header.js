import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Enjoy My Image Slidding Puzzle Game</h1>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='/game' activeClassName='route--active'>
      Game
    </Link>
  </div>
)

export default Header
