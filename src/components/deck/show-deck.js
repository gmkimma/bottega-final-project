import React, { Component } from 'react'

import Deck from './deck'

export default class ShowDeck extends Component {
  constructor (props) {
    super(props)

    this.state = {
      deck: Deck()
    }

    this.handleClickCard = this.handleClickCard.bind(this)
  }

  //Returns the card that is clicked in the card modal
  handleClickCard = e => {
    this.props.handleCardSelection(e.target.outerText)
  }

  render () {
    //creates an array for the spade cards
    const spadeCards = []
    for (let i = 0; i < 13; i++) {
      spadeCards.push(this.state.deck[i])
    }

    //creates an array for the heart cards
    const heartCards = []
    for (let i = 13; i < 26; i++) {
      heartCards.push(this.state.deck[i])
    }

    //creates an array for the club cards
    const clubCards = []
    for (let i = 26; i < 39; i++) {
      clubCards.push(this.state.deck[i])
    }

    //creates an array for the diamond cards
    const diamondCards = []
    for (let i = 39; i < 52; i++) {
      diamondCards.push(this.state.deck[i])
    }

    return (
      <>
        {/* Created 4 divs to present the deck in 4 rows of 13 cards of each suit */}
        <div className='spade-wrapper'>
          {spadeCards.map((card, index) => {
            return (
              <div
                key={index}
                className='visible-card'
                onClick={this.handleClickCard}
              >
                {card}
              </div>
            )
          })}
        </div>

        <div className='heart-wrapper'>
          {heartCards.map((card, index) => {
            return (
              <div
                key={index + 13}
                className='visible-card'
                onClick={this.handleClickCard}
              >
                {card}
              </div>
            )
          })}
        </div>

        <div className='club-wrapper'>
          {clubCards.map((card, index) => {
            return (
              <div
                key={index + 26}
                className='visible-card'
                onClick={this.handleClickCard}
              >
                {card}
              </div>
            )
          })}
        </div>

        <div className='diamond-wrapper'>
          {diamondCards.map((card, index) => {
            return (
              <div
                key={index + 39}
                className='visible-card'
                onClick={this.handleClickCard}
              >
                {card}
              </div>
            )
          })}
        </div>
      </>
    )
  }
}
