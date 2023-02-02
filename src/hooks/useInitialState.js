import {useState} from 'react';

const initialState = {
    cart: [],
}

const useInitialState = () => {
    const [state, setState] = useState(initialState);

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [...state.cart, {...payload, idCart:state.cart.length+1},],
        });
    };

    const removeFromCart = (indexValue) => {
        setState({
        ...state,
        cart: state.cart.filter((product,index) => index !== indexValue),
        })
    }


    return {
        state,
        addToCart,
        removeFromCart
    }
}
export default useInitialState;