import React from 'react'
import { range } from 'lodash'

import GameBoard from './GameBoard'

import './GameView.scss'


export default class GameView extends React.Component {

  render () {

    return (
      <div>
        <h4>GameView</h4>
        <GameBoard />
      </div>
    )
  }
}
