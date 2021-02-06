import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';
import Storage from '../helpers/Storage'
import { utils } from '../constants/utils'
const addTodo = data => ({
    type: ADD_TODO,
    payload: data,
});

export const addNode = (note, dispatch, todo = false) => {
    if (todo) Storage.set(utils.todo, [...todo, ...note,]);
    dispatch(addTodo(note));
};