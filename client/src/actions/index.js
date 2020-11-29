export const addToBasketAction = id => ({
    type: 'ADD_TO_BASKET',
    id
});

export const removeFromBasketAction = id => ({
    type: 'REMOVE_FROM_BASKET',
    id
});

export const changeQuantityAction = (id, quantity) => ({
    type: 'CHANGE_QUANTITY_IN_BASKET',
    id,
    quantity
});

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
});


