import React, { Component } from 'react'

import NavBar from '../navigation/navigation-container'

export default class Home extends Component {
  render () {
    return (
      <>
        <NavBar />

        <div className='game-table'>
          <div className='dealer-cards'>
            <div className='card'>1</div>
            <div className='card'>2</div>
            <div className='dealer-total'>Dealer Total</div>
          </div>

          <div className='player-cards'>
            <div className='card'>1</div>
            <div className='card'>2</div>
            <div className='player-total'>Player Total</div>
          </div>

          <div className='action-wrapper'>
            <div className='action'>Surrender</div>
            <div className='action'>Split</div>
            <div className='action'>Double</div>
            <div className='action'>Stand</div>
            <div className='action'>Hit</div>
          </div>

          <div className='odds-wrapper'>
            Odds of next card
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </ul>
          </div>

          <div className='strategy-wrapper'>
            <div className='strategy'>
              <h3>You should probably do this...</h3>
            </div>
          </div>
        </div>
      </>
    )
  }
}
