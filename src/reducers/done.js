/* eslint-disable prettier/prettier */
import {
    ADD_DONE,
    MOVE_TO_DONE,
    DELETE_DONE,
    UPDATE_DONE
} from '../constants/actions-redux';
import { deleteObjetInArray, findIndexObjetInArray } from '../helpers'

const INITIAL_STATE = [];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_DONE: {
            return [...state, ...action.payload];
        }
        case DELETE_DONE: {
            return deleteObjetInArray(state, action.payload.index);
        }
        case UPDATE_DONE: {
            // let index = findIndexObjetInArray(state, action.payload.index);
            state[action.payload.index] = action.payload;
            return state;
        }
        default:
            return state;
    }
}
