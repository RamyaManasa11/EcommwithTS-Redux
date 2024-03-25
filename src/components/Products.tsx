import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/action';
import { toast } from "react-toastify";
import { Product } from '../redux/action/types';
import { RootState } from '../redux/reducer';
import '../App.css';

 type ProductProps = {
    categories: string[];
    onChange: (category: string) => void;
}

const Products: React.FC<ProductProps> = ({ categories, onChange }) => {

    const [productList, setProductList] = useState<Product[]>([]);
    const [filter, setFilter] = useState<Product[]>([]);
    const [showToast, setToastmsg] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state: RootState) => state.cart);

    const getProductDetails = async () => {
        try {
            const result = await fetch('https://dummyjson.com/products');
            const response = await result.json();
            setProductList(response.products);
            setFilter(response.products);
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getProductDetails();
    }, []);


    const filterProduct = (category: string) => {
        const updatedList = productList.filter((x) => x.category === category);
        onChange(category);
        setFilter(updatedList);
    }

    const handleAddToCart = (item: Product) => {
        dispatch(addToCart(item));
        setToastmsg(true);
    }

    useEffect(() => {
        if (showToast) {
            const itemAdded = cartItems.find((cartItem: Product) => productList.map(item => item.id === cartItem.id));
            console.log(itemAdded)
            if (itemAdded) {
                toast.success("successfully added to cart...!");
            }
            setToastmsg(false);
        }
    }, [cartItems]);


    return (
        <>
            <div className="buttons d-flex justify-content-center ">
                <button id="btn1" className="btn btn-outline-dark me-2" onClick={() => { setFilter(productList); onChange("") }}>All</button>
                {
                    categories ? categories.map((item, index) => (
                        <button className="btn btn-outline-dark me-2" key={index} onClick={() => filterProduct(item)}>{item}</button>
                    )) : null
                }
            </div>
            <div className='product-container'>
                {
                    filter && filter.length > 0 ?
                        filter.map((item) =>
                            <div key={item.id} className='product-item'>
                                <img src={item.images[0]} width={250} height={200} alt="" />
                                <h5> {item.title}</h5>
                                <hr />
                                <p>Stock available: {item.stock}</p>
                                <p>Brand: {item.brand}</p>
                                <div className='flexSB'>
                                    <h5> ${item.price} </h5>
                                    <span className='icon itemstock'>
                                        {item.rating}
                                    </span>
                                </div>
                                <div className=''>
                                    <button className="btn btn-outline-dark" onClick={() => handleAddToCart(item)}> Add to Cart </button>
                                </div>
                            </div>
                        ) :
                        <h5>Data Loading...!</h5>
                }
            </div>
        </>
    )
}

export default Products;
