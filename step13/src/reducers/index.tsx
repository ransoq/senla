type book = {
    id: number,
    title: string,
    author: string,
    price: number,
    coverImg: string
};

type cartItem = {
    id: number,
    title: string,
    count: number,
    total: number
};

type defaultAction = {
    type: string,
    payload: any
};

interface defaultState {
    books: book[],
    loading: boolean,
    error: object | null,
    cartItems: cartItem[],
    orderTotal: number
};

const initialState = {
    books: [],
    loading: true,
    error: null,
    cartItems: [],
    orderTotal: 0
};

const updateCartItems = (cartItems: cartItem[], item: cartItem, idx: number ) => {

    if (item.count === 0) {
        return [
            ...cartItems.slice(0, idx),
            ...cartItems.slice(idx + 1)
        ]
    }

    if (idx === -1) {
        return [
            ...cartItems,
            item
        ];
    }
    return [
        ...cartItems.slice(0, idx),
        item,
        ...cartItems.slice(idx + 1)
    ];
}

const updateItem = (book: book, item: cartItem, quantity: number) => {

    if (item) {
        return {
            ...item,
            count: item.count + quantity,
            total: item.total + quantity * book.price
        };
    } else {
        return {
            id: book.id,
            title: book?.title,
            count: 1,
            total: book?.price
        };
    };
}

const updateOrder = (state: defaultState, bookId: number, quantity: number) => {

    const { books, cartItems } = state;

    const book: book = books.find((book: book) => book.id === bookId)!;
    const itemIndex = cartItems.findIndex(({id}:{id: number}) => id === bookId);
    const item = cartItems[itemIndex];
    
    const newItem = updateItem(book, item, quantity);

    return {
        ...state,
        cartItems: updateCartItems(cartItems, newItem, itemIndex)
    };
}

const reducer = (state: defaultState = initialState, action: any) => {

    switch (action.type) {
        case 'BOOKS_REQUESTED':
            return {
                ...state,
                books: [],
                loading: true,
                error: null
            };
        case 'BOOKS_LOADED':
            return {
                ...state,
                books: action.payload,
                loading: false,
                error: null
            };
        case 'BOOKS_ERROR':
            return {
                ...state,
                books: [],
                loading: false,
                error: action.payload
            };
        case 'BOOK_ADDED_TO_CART':
            return updateOrder(state, action.payload, 1)

        case "BOOK_REMOVED_FROM_CART":
            return updateOrder(state, action.payload, -1)

        case "ALL_BOOKS_REMOVED_FROM_CART":
            const item = state.cartItems.find(({id}) => id === action.payload)!;
            return updateOrder(state, action.payload, -item.count)

        default: 
            return state;
    }
}

export default reducer;