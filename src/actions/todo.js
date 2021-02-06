import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';

const addTodo = data => ({
    type: ADD_TODO,
    payload: data,
});

export const addNode = (note, dispatch) => {
    // Storage.set('userData', user);
    dispatch(addTodo(note));
};