
import * as api from '../utils/api'
import { formatDeck } from '../utils/helpers'

export const RECEIVE_DECKS = 'RECEIVE_DECKS'
export const RECEIVE_CARD = 'RECEIVE_CARD'
export const DELETE_DECK = 'DELETE_DECK'

// GET ALL DECKS
export function receiveDecks (decks) {
  return {
    type: RECEIVE_DECKS,
    decks
  }
}

export function requestDecks () {
  return (dispatch) => {
    api.getDecks()
      .then(decks => {
        dispatch(receiveDecks(decks))
      })
  }
}

// ADD DECK
export function addDeck (title) {
  return (dispatch) => {
    const deck = formatDeck(title)
    dispatch(receiveDecks(deck))
    api.saveDeck(deck)
  }
}

// DELETE DECK
export function deleteDeck (deckKey) {
  return {
    type: DELETE_DECK,
    deckKey
  }
}

export function requestDeleteDeck (deckKey) {
  return (dispatch) => {
    dispatch(deleteDeck(deckKey))
    api.deleteDeck(deckKey)
  }
}

// GET CARD
export function receiveCard ({ deckKey, question, answer }) {
  return {
    type: RECEIVE_CARD,
    deckKey, question, answer
  }
}

// ADD CARD
export function addCard ({ deckKey, question, answer }) {
  return (dispatch) => {
    dispatch(receiveCard({ deckKey, question, answer }))
    api.addCardDeck({ deckKey, question, answer })
  }
}


