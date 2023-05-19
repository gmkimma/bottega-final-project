import React, { Component } from 'react'

import NavBar from '../navigation/navigation-container'
import CardModal from '../modals/card-modal'
import Odds from '../strategy/odds'

import Deck from '../deck/deck'

//images for buttons
import surrender from '../../assets/images/home/surrender.png'
import split from '../../assets/images/home/split.png'
import double from '../../assets/images/home/double.png'
import stand from '../../assets/images/home/stand.png'
import hit from '../../assets/images/home/hit.png'

export default class Home extends Component {
  constructor (props) {
    super(props)
    this.state = {
      deck: Deck(),
      cardModalIsOpen: false,
      dealerCardOne: {
        bgColor: '',
        bgImg: '',
        card: ''
      },
      dealerCardTwo: {
        bgColor: '',
        bgImg: '',
        card: ''
      },
      dealerTotal: 0,
      playerTotal: 0
    }

    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleDealerCardOneClick = this.handleDealerCardOneClick.bind(this)
    this.calculateDealerTotal = this.calculateDealerTotal.bind(this)
    this.handleDealerCardTwoClick = this.handleDealerCardTwoClick.bind(this)
  }

  calculateDealerTotal () {
    let card = this.state.dealerCardOne.card
    if (card !== '') {
      card = card.slice(0, -1)

      if (card === 'K' || card === 'Q' || card === 'J') {
        card = '10'
      }
      if (card === 'A') {
        card = '11'
      }
      this.setState({
        dealerTotal: parseInt(card, 10)
      })
    }
  }

  handleCardSelection (card) {
    this.setState({
      dealerCardOne: {
        bgColor: 'white',
        bgImg: 'none',
        card: card
      },
      cardModalIsOpen: false
    })

    const index = this.state.deck.indexOf(card)
    if (index > -1) {
      this.state.deck.splice(index, 1)
    }

    let c = card.slice(0, -1)
    if (c === 'K' || c === 'Q' || c === 'J') {
      c = '10'
    }
    if (c === 'A') {
      c = '11'
    }
    this.setState({
      dealerTotal: this.state.dealerTotal + parseInt(c)
    })
  }

  handleModalClose () {
    this.setState({
      cardModalIsOpen: false
    })
  }

  handleDealerCardOneClick () {
    this.setState({
      cardModalIsOpen: true,
      dealerTotal: 0
    })
  }

  handleDealerCardTwoClick () {
    this.setState({
      cardModalIsOpen: true,
      dealerTotal: 0
    })
  }

  render () {
    return (
      <>
        <CardModal
          handleCardSelection={this.handleCardSelection}
          handleModalClose={this.handleModalClose}
          modalIsOpen={this.state.cardModalIsOpen}
        />

        <NavBar />

        <div className='game-table'>
          <div className='dealer-cards'>
            <div
              className='card'
              style={{
                backgroundColor: this.state.dealerCardOne.bgColor,
                backgroundImage: this.state.dealerCardOne.bgImg
              }}
              onClick={this.handleDealerCardOneClick}
            >
              <span>{this.state.dealerCardOne.card}</span>
            </div>
            <div
              className='card'
              style={{
                backgroundColor: this.state.dealerCardTwo.bgColor,
                backgroundImage: this.state.dealerCardTwo.bgImg
              }}
              onClick={this.handleDealerCardTwoClick}
            >
              {this.state.dealerCardTwo.card}
            </div>
            <div className='dealer-total' onClick={this.calculateDealerTotal}>
              {this.state.dealerTotal}
            </div>
          </div>

          <div className='strategy-wrapper'>
            <div className='strategy'>
              <h3>(You should probably do this...)</h3>
            </div>
          </div>

          <div className='player-cards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='player-total'>{this.state.playerTotal}</div>
          </div>

          <div className='action-wrapper'>
            <div className='action'>
              <img src={surrender} alt='surrender' />
              Surrender
            </div>
            <div className='action'>
              <img src={split} alt='split' />
              Split
            </div>
            <div className='action'>
              <img src={double} alt='double' />
              Double
            </div>
            <div className='action'>
              <img src={stand} alt='stand' />
              Stand
            </div>
            <div className='action'>
              <img src={hit} alt='hit' />
              Hit
            </div>
          </div>

          <Odds deck={this.state.deck} />
        </div>
      </>
    )
  }
}
