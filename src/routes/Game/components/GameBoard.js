import React from 'react'
import { range } from 'lodash'

import './GameBoard.scss'


export default class GameBoard extends React.Component {

  render () {
    let tableBoard = [];
    _.range(3).map((i) => {
      let trCell = [];
      _.range(3).map((j) =>
        trCell.push(<td className={"gameboard-td"} key={( i*3 + j ).toString()}>{ i*3 + j }</td>)
      );
      tableBoard.push(<tr key={"tr" + i}>{trCell}</tr>)
    });

    return (
      <table>
        <tbody>
          { tableBoard }
        </tbody>
      </table>
    )
  }
}
