import React from 'react'

import NavBar from '../navigation/navigation-container'

//images for buttons
import surrender from '../../assets/images/home/surrender.png'
import split from '../../assets/images/home/split.png'
import double from '../../assets/images/home/double.png'
import stand from '../../assets/images/home/stand.png'
import hit from '../../assets/images/home/hit.png'

export default function Home () {
  return (
    <>
      <NavBar />

      <div className='game-table'>
        <div className='dealer-cards'>
          <div className='card'></div>
          <div className='card'></div>
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
      </div>
    </>
  )
}
