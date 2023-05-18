import React, { Component } from 'react'

import Deck from './deck'

export default class ShowDeck extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: Deck()
    }
  }

  render () {
    const spadeCards = []
    for (let i = 0; i < 13; i++) {
      spadeCards.push(this.state.deck[i])
    }

    const heartCards = []
    for (let i = 13; i < 26; i++) {
      heartCards.push(this.state.deck[i])
    }

    const clubCards = []
    for (let i = 26; i < 39; i++) {
      clubCards.push(this.state.deck[i])
    }

    const diamondCards = []
    for (let i = 39; i < 52; i++) {
      diamondCards.push(this.state.deck[i])
    }

    return (
      <>
        <div className='spade-wrapper'>
          {spadeCards.map((card, index) => {
            return (
              <div key={index} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='heart-wrapper'>
          {heartCards.map((card, index) => {
            return (
              <div key={index} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='club-wrapper'>
          {clubCards.map((card, index) => {
            return (
              <div key={index} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='diamond-wrapper'>
          {diamondCards.map((card, index) => {
            return (
              <div key={index} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
