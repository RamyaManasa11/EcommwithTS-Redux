export const ADDTOCART = 'ADDTOCART';
export const DELETEFROMCART = 'DELETEFROMCART';

export interface Product {
    id: number;
    name: String;
    category: String;
    images: string[];
    title: string;
    stock: number;
    brand: string;
    price: number;
    rating: number;
    description: string;
    quantity: number;
}