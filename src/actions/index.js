const menuLoaded = (newMenu) => {
    return {
        type: "MENU_LOADED",
        payload: newMenu
    };
};

const menuRequested = () => {
    return {
        type: "MENU_REQUESTED"
    }
}

const menuError = () => {
    return {
        type: "MENU_ERROR"
    }
}

const addedToCart = (id) => {
    return {
        type: "ADD_TO-CART",
        payload: id
    }
}

const deleteFromCart = (id) => {
    return {
        type: "DELETE_FROM_CART",
        payload: id
    }
}

// const addMore = (id) => {
//     return {
//         type: "ADD_MORE",
//         payload: id
//     }
// }

const removeMore = (id) => {
    return {
        type: "REMOVE_MORE",
        payload: id
    }
}

export {
    menuLoaded,
    menuRequested,
    menuError,
    addedToCart,
    deleteFromCart,
    removeMore
};