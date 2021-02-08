import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';
import Storage from '../helpers/Storage'
import { utils } from '../constants/utils'
import { deleteObjetInArray } from '../helpers'

const addTodo = data => ({
    type: ADD_TODO,
    payload: data,
});

const deleteDone = data => ({
    type: DELETE_TODO,
    payload: data,
});

const updateDone = data => ({
    type: UPDATE_TODO,
    payload: data,
});


export const addDone = (note, dispatch, todo = false) => {
    if (todo) Storage.set(utils.todo, [...todo, ...note]);
    dispatch(addTodo(note));
};

export const deleteNoteDone = (dispatch, todo, index) => {
    Storage.set(utils.todo, deleteObjetInArray(todo, index));
    dispatch(deleteDone(index));
};

export const updatedDone = (dispatch, todo, index, newnote) => {
    Storage.set(utils.todo, todo[index] = newnote);
    dispatch(updateDone(newnote));
};


