import { ADD_ITEM, DELETE_ITEM } from './cardTypes';

export const addItemToCard = (payload) => ({
    type: ADD_ITEM,
    payload
});

export const deleteItemFromCard = (payload) => ({
    type: DELETE_ITEM,
    payload
});