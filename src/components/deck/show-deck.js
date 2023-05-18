import React, { Component } from 'react'

import Deck from './deck'

export default class ShowDeck extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: Deck()
    }
  }

  handleClickCard = e => {
    this.props.handleCardSelection(e.target.outerText)
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
        <div className='spade-wrapper' onClick={this.handleClickCard}>
          {spadeCards.map((card, index) => {
            return (
              <div key={index} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='heart-wrapper' onClick={this.handleClickCard}>
          {heartCards.map((card, index) => {
            return (
              <div key={index + 13} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='club-wrapper' onClick={this.handleClickCard}>
          {clubCards.map((card, index) => {
            return (
              <div key={index + 26} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>

        <div className='diamond-wrapper' onClick={this.handleClickCard}>
          {diamondCards.map((card, index) => {
            return (
              <div key={index + 39} className='visible-card'>
                {card}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
