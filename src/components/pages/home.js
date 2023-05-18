import React, { Component } from 'react'

import NavBar from '../navigation/navigation-container'
import CardModal from '../modals/card-modal'
import Odds from '../strategy/odds'

import Deck from '../deck/deck'
import cardDesign from '../../assets/images/home/card-design.png'

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
      bgColor: '',
      bgImg: cardDesign,
      cardModalIsOpen: false,
      card: '',
      dealerTotal: 0
    }

    this.handleCardSelection = this.handleCardSelection.bind(this)
    this.handleModalClose = this.handleModalClose.bind(this)
    this.handleCardClick = this.handleCardClick.bind(this)
  }

  handleCardSelection (card) {
    this.setState({
      cardModalIsOpen: false,
      card: card
    })
  }

  handleModalClose () {
    this.setState({
      cardModalIsOpen: false
    })
  }

  handleCardClick () {
    this.setState({
      bgColor: 'white',
      bgImg: 'none',
      cardModalIsOpen: true
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
                backgroundColor: this.state.bgColor,
                backgroundImage: this.state.bgImg
              }}
              onClick={this.handleCardClick}
            >
              {this.state.card}
            </div>
            <div
              className='card'
              style={{
                backgroundColor: this.state.bgColor,
                backgroundImage: this.state.bgImg
              }}
              onClick={this.handleCardClick}
            >
              {this.state.card}
            </div>
            <div className='dealer-total'>Dealer Total</div>
          </div>

          <div className='strategy-wrapper'>
            <div className='strategy'>
              <h3>You should probably do this...</h3>
            </div>
          </div>

          <div className='player-cards'>
            <div className='card'></div>
            <div className='card'></div>
            <div className='player-total'>Player Total</div>
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
