const initialState = {
    menu: [],
    loading: true,
    error: false, 
    items: []
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case "MENU_LOADED":
            return {
                ...state,
                menu: action.payload,
                loading: false,
                error: false
            };
        case "MENU_REQUESTED":
        return {
            ...state,
            menu: state.menu,
            loading: true,
            error: false
        };
        case "MENU_ERROR":
        return {
            ...state,
            menu: state.menu,
            loading: false,
            error: true
        };
        case "ADD_TO-CART":
            const id = action.payload;
            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                price: item.price,
                id: item.id
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ]
            };
        case "DELETE_FROM_CART":
            const indx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === indx);
            return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ]
            };
        default: 
            return state
    }
}

export default reducer;