const initialState = {
    menu: [],
    loading: true,
    error: false, 
    items: [],
    total: 0
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

            const itemInd = state.items.findIndex(item => item.id === id);
            if (itemInd >= 0){
                const itemInState = state.items.find(item => item.id === id);
                const newItem = {
                    ...itemInState,
                    count: ++itemInState.count
                }
                return {
                    ...state, 
                    items: [
                        ...state.items.slice(0, itemInd),
                        newItem,
                        ...state.items.slice(itemInd + 1)
                    ],
                    total: state.total + newItem.price
                }
            } 

            const item = state.menu.find(item => item.id === id);
            const newItem = {
                title: item.title,
                url: item.url,
                price: item.price,
                id: item.id,
                count: 1
            };
            return {
                ...state,
                items: [
                    ...state.items,
                    newItem
                ],
                total: state.total + newItem.price
            };
        case "DELETE_FROM_CART":
            const indx = action.payload;
            const itemIndex = state.items.findIndex(item => item.id === indx);
            const price = state.items[itemIndex]['price'] * state.items[itemIndex]['count'];
                return {
                ...state,
                items: [
                    ...state.items.slice(0, itemIndex),
                    ...state.items.slice(itemIndex + 1)
                ],
                total: state.total - price
                };
            case "REMOVE_MORE":
                const index = action.payload;
                const itemIndx = state.items.findIndex(item => item.id === index);
                
                const itemInState = state.items.find(item => item.id === index);
                const thisItem = {
                        ...itemInState,
                        count: --itemInState.count
                    }
                // const thisPrice = state.items[itemIndx]['price'] * state.items[itemIndx]['count'];
                if (itemInState.count <= 0){
                    return {
                        ...state,
                        items: [
                            ...state.items.slice(0, itemIndx),
                            ...state.items.slice(itemIndx + 1)
                        ],
                        total: state.total - itemInState.price
                        }
                }
                    return {
                        ...state, 
                        items: [
                            ...state.items.slice(0, itemIndx),
                            thisItem,
                            ...state.items.slice(itemIndx + 1)
                        ],
                        total: state.total - itemInState.price
                    };
            default: 
            return state
    }
}

export default reducer;