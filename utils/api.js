import { AsyncStorage } from 'react-native'

const STORAGE_KEY = 'MobileFlashcards:storage'

export function getDecks() {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      return JSON.parse(res)
    })
}


export function saveDeck(deck) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(prevState => {
      const newState = {
        ...JSON.parse(prevState),
        ...deck
      }
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
    })
}

export function addCardDeck({ deckKey, question, answer }) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(res => {
      const prevState = JSON.parse(res)
      const newState = {
        ...prevState,
        [deckKey]: {
          ...prevState[deckKey],
          questions: [
            ...prevState[deckKey].questions,
            {
              question,
              answer
            }
          ]
        }
      }
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
    })
}

export function deleteDeck(deckKey) {
  return AsyncStorage.getItem(STORAGE_KEY)
    .then(prevState => {
      const newState = { ...JSON.parse(prevState) }
      delete newState[deckKey]
      AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(newState))
    })
}
