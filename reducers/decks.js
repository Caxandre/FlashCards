import { RECEIVE_DECKS, RECEIVE_CARD, DELETE_DECK } from '../actions/deck'

export default function decks(state = {}, action) {
  switch (action.type) {
    case RECEIVE_DECKS:
      return {
        ...state,
        ...action.decks


      }
    case RECEIVE_CARD:
      return {
        ...state,
        [action.deckKey]: {
          ...state[action.deckKey],
          questions: [
            ...state[action.deckKey].questions,
            {
              question: action.question,
              answer: action.answer
            }
          ]
        }
      }
    case DELETE_DECK:
      var updatedState = { ...state }
      delete updatedState[action.deckKey]
      return updatedState
    default:
      return state
  }
}