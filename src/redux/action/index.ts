import { ADDTOCART, DELETEFROMCART } from "./types";


export const addToCart = (product: any) => ({
    type : ADDTOCART,
    payload: product
});

export const deleteFromCart = (product: any) => ({
    type : DELETEFROMCART,
    payload: product
});