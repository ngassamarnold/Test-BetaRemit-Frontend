import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';
import Storage from '../helpers/Storage'
const addTodo = data => ({
    type: ADD_TODO,
    payload: data,
});

export const addNode = (note, todo, dispatch) => {
    Storage.set('todo', [...note, ...todo]);
    dispatch(addTodo(note));
};