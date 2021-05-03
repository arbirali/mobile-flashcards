import AsyncStorage from '@react-native-async-storage/async-storage';

import { getAllDecks, addDeck, addCard } from './decks'
import { SYNC_STORAGE_KEY, SAMPLE_DECKS } from '../helpers/constants'

export function handleAllDecks (dispatch) {
    return (dispatch) => {
        // AsyncStorage.removeItem(SYNC_STORAGE_KEY)
        AsyncStorage.getItem(SYNC_STORAGE_KEY).then((data)=> {
            if(data === null) {
                AsyncStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(SAMPLE_DECKS))
            } else {
                dispatch(getAllDecks(JSON.parse(data)))
            }
        }).catch((error)=>{
          console.log(error)
        })
    }
}

export function handleAddDeck (deck) {
    return (dispatch) => {
        AsyncStorage.getItem(SYNC_STORAGE_KEY).then((data)=> {
            let decks = JSON.parse(data)
            decks = {
                ...decks,
                [deck]: {
                    ...decks[deck],
                    title: deck,
                    questions: []
                }
            }
            AsyncStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(decks))
        })
        .then(()=> {
            dispatch(addDeck(deck))
        })
    }
}

export function handleAddCard ({id, question, answer}) {
    return (dispatch) => {
        AsyncStorage.getItem(SYNC_STORAGE_KEY).then((data)=> {
            let decks = JSON.parse(data)
            decks = {
                ...decks,
                [id]: {
                    ...decks[id],
                    questions: decks[id].questions.concat({
                        question: question,
                        answer: answer
                    })
                }
            }
            AsyncStorage.setItem(SYNC_STORAGE_KEY, JSON.stringify(decks))
        })
        .then(()=> {
            dispatch(addCard({id, question, answer}))
        })
    }
}

