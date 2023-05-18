import React, { Component } from 'react'
import ReactModal from 'react-modal'

import ShowDeck from '../deck/show-deck'

ReactModal.setAppElement('#root')

export default class CardModal extends Component {
  constructor (props) {
    super(props)

    this.customStyles = {
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
    }

    this.handleCardSelection = this.handleCardSelection.bind(this)
  }

  handleCardSelection (card) {
    this.props.handleCardSelection(card)
  }

  render () {
    return (
      <ReactModal
        style={this.customStyles}
        onRequestClose={() => {
          this.props.handleModalClose()
        }}
        isOpen={this.props.modalIsOpen}
      >
        <ShowDeck handleCardSelection={this.handleCardSelection} />
      </ReactModal>
    )
  }
}
