import { ADD_TODO, UPDATE_TODO, DELETE_TODO } from '../constants/actions-redux';
import Storage from '../helpers/Storage'
import { utils } from '../constants/utils'
import { deleteObjetInArray } from '../helpers'
const addTodo = data => ({
    type: ADD_TODO,
    payload: data,
});

const deleteNote = data => ({
    type: DELETE_TODO,
    payload: data,
});

const updateNote = data => ({
    type: UPDATE_TODO,
    payload: data,
});


export const addNode = (note, dispatch, todo = false) => {
    if (todo) Storage.set(utils.todo, [...todo, ...note]);
    dispatch(addTodo(note));
};

export const deletedNote = (dispatch, todo, index) => {
    Storage.set(utils.todo, deleteObjetInArray(todo, index));
    dispatch(deleteNote(index));
};

export const updatedNoteTodo = (dispatch, todo, index, newnote) => {
    let updateTodo = todo[index] = newnote
    Storage.set(utils.todo, updateTodo);
    dispatch(updateNote(newnote));
};


