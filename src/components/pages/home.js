import React, { useState } from 'react'

import NavBar from '../navigation/navigation-container'
import DeckModal from '../modals/deck-modal'
import Odds from '../strategy/odds'

import Deck from '../deck/deck'

//images for buttons
import surrender from '../../assets/images/home/surrender.png'
import split from '../../assets/images/home/split.png'
import double from '../../assets/images/home/double.png'
import stand from '../../assets/images/home/stand.png'
import hit from '../../assets/images/home/hit.png'

export default function Home (props) {
  const [deck, setDeck] = useState(Deck(6))
  const [cardModalIsOpen, setCardModalIsOpen] = useState(false)
  const [dealerCardOne, setDealerCardOne] = useState({
    bgColor: '',
    bgImg: '',
    card: ''
  })
  const [dealerCardTwo, setDealerCardTwo] = useState({
    bgColor: '',
    bgImg: '',
    card: ''
  })
  const [dealerTotal, setDealerTotal] = useState(0)
  const [playerTotal, setPlayerTotal] = useState(0)

  function calculateDealerTotal () {
    let card = dealerCardOne.card
    if (card !== '') {
      card = card.slice(0, -1)

      if (card === 'K' || card === 'Q' || card === 'J') {
        card = '10'
      }
      if (card === 'A') {
        card = '11'
      }
      setDealerTotal(parseInt(card, 10))
    }
  }

  function handleCardSelection (card) {
    setDealerCardOne({
      bgColor: 'white',
      bgImg: 'none',
      card: card
    })

    setCardModalIsOpen(false)

    const index = deck.indexOf(card)
    if (index > -1) {
      deck.splice(index, 1)
    }

    let c = card.slice(0, -1)
    if (c === 'K' || c === 'Q' || c === 'J') {
      c = '10'
    }
    if (c === 'A') {
      c = '11'
    }
    setDealerTotal(dealerTotal => dealerTotal + parseInt(c))
  }

  function handleModalClose () {
    setCardModalIsOpen(false)
  }

  function handleDealerCardOneClick () {
    setCardModalIsOpen(true)
    setDealerTotal(0)
  }

  function handleDealerCardTwoClick () {
    setCardModalIsOpen(true)
    setDealerTotal(0)
  }

  return (
    <>
      <DeckModal
        handleCardSelection={handleCardSelection}
        handleModalClose={handleModalClose}
        modalIsOpen={cardModalIsOpen}
      />

      <NavBar />

      <div className='game-table'>
        <div className='dealer-cards'>
          <div
            className='card'
            style={{
              backgroundColor: dealerCardOne.bgColor,
              backgroundImage: dealerCardOne.bgImg
            }}
            onClick={handleDealerCardOneClick}
          >
            <span>{dealerCardOne.card}</span>
          </div>
          <div
            className='card'
            style={{
              backgroundColor: dealerCardTwo.bgColor,
              backgroundImage: dealerCardTwo.bgImg
            }}
            onClick={handleDealerCardTwoClick}
          >
            {dealerCardTwo.card}
          </div>
          <div className='dealer-total' onClick={calculateDealerTotal}>
            {dealerTotal}
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
          <div className='player-total'>{playerTotal}</div>
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

        <Odds deck={deck} />
      </div>
    </>
  )
}
