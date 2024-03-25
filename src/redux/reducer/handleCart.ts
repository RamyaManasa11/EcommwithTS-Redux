import { ADDTOCART, DELETEFROMCART } from "../action/types";

export interface CartItem {
    id: number;
    quantity: number;
}

const cart: CartItem[] = [];

const handleCart = (state = cart, action: any) => {
    const newProduct = action.payload;
    switch(action.type) {
        case ADDTOCART :
            const itemExists = state.find((product: CartItem)=> product.id === newProduct.id);
            if(itemExists){
                return state.map((product: CartItem)=> product.id === newProduct.id ? { ...product, quantity: product.quantity + 1 } : product);
            }
            else{
                return [...state, {...newProduct, quantity: 1}];
            }
        case DELETEFROMCART :
            const item1Exists = state.find((product: CartItem)=> product.id === newProduct.id);
            if(item1Exists?.quantity===1){
                return state.filter((product: CartItem) => product.id !== item1Exists.id );
            }
            else{
                return state.map((product: CartItem)=> product.id === newProduct.id ? {...product, quantity: product.quantity-1} : product);
            }
        default:
            return state;
    }
}

export default handleCart;