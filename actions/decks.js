import { GET_DECKS, ADD_DECK, ADD_CARD } from '../helpers/constants'

export function getAllDecks (decks) {
    return {
        type: GET_DECKS,
        decks
    }
}

export function addDeck (deck) {
    return {
        type: ADD_DECK,
        deck
    }
}

export function addCard ({id, question, answer}) {
    return {
        type: ADD_CARD,
        id,
        answer,
        question
    }
}
