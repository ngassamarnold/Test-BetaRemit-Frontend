/* eslint-disable prettier/prettier */
import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';
import { deleteObjetInArray, findIndexObjetInArray } from '../helpers'

const INITIAL_STATE = [{id:"33"}];

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case ADD_TODO: {
            return [...state, ...action.payload];
        }
        case DELETE_TODO: {
            return deleteObjetInArray(state, action.payload.index);
        }
        case UPDATE_TODO: {
            let index = findIndexObjetInArray(state, action.payload.index);
            state[index] = action.payload;
            return state;
        }
        default:
            return state;
    }
}
