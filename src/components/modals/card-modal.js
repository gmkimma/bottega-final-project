import React, { useState } from 'react'
import ReactModal from 'react-modal'

import ShowDeck from '../deck/show-deck'

ReactModal.setAppElement('#root')

export default function CardModal (props) {
  //Creating default customStyles
  const [customStyles, setCustomStyles] = useState({
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
      width: '910px',
      backgroundColor: '#427e60',
      border: 'none'
    },
    overlay: {
      backgroundColor: 'rgba(1, 1, 1, 0.75)'
    }
  })

  //Used to update customStyles
  // setCustomStyles()

  //Passing the picked card up to parent
  function handleCardSelection (card) {
    props.handleCardSelection(card)
  }

  return (
    <ReactModal
      style={customStyles}
      onRequestClose={() => {
        props.handleModalClose()
      }}
      isOpen={props.modalIsOpen}
    >
      <ShowDeck handleCardSelection={handleCardSelection} />
    </ReactModal>
  )
}
