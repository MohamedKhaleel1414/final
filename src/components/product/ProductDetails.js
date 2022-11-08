import React from 'react';
import { useLocation } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import '../Styling/carosal.css';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { addToCartAction } from '../../Redux/Actions/addToCartAction';
import {axiosInstance} from '../../config/axios'
import { useEffect } from 'react';

function ProductDetails() {

    const productDet = useLocation().state;
    const imgsOfProd = productDet.img;

    const user=JSON.parse(localStorage.getItem("authorization"))

    useEffect(()=>{
    },[])

    const nav = useNavigate();
    const dispatch = useDispatch();

    function addToCart(productDet) {
       if(user){
        axiosInstance.post(`/user/addtocart/${user}/${productDet._id}`).then((res)=>{})
        dispatch(addToCartAction(productDet));
        nav(`/cart/${productDet._id}`,{ state : productDet});
       }
       else{
        nav(`/cart/${productDet._id}`,{ state : productDet});
       }
    };

    function exchange(productDet){
        nav(`/exchangeProducts`,{state:productDet})
    }

    return (
        <>
            <div className="row pt-3 my-3 justify-content-between">
                <section className="col-8 ps-2">
                    <Carousel>
                        {imgsOfProd.map((image, index) => {
                            return <div className='sliderdiv' key={index}>
                                <img className='sliderimg' alt='..' src={'http://localhost:4000/' + image}/>
                                {/* <p className="legend">Legend 1</p> */}
                            </div>
                        })}
                    </Carousel>

                    <div className="border border-1 rounded-2 mt-3">
                        <div className="container py-3">
                            <h4 className="text-primary pb-3 border-bottom border-primary border-opacity-75 mb-3 ">Description</h4>
                            <div>{productDet.description}</div>
                        </div>
                    </div>
                </section>
                <section className="col-4 ps-5">
                    <div className="border border-1  rounded-2 mb-3">
                        <div className="container py-2">
                            <div className="row px-2">
                                <p className="col fs-4 text-primary fw-semibold text-start ">Title</p>
                                <p className="col fs-4 text-primary text-end ">{productDet.title}</p>
                            </div>
                            <div className="row px-2">
                                <p className="col fs-5 text-primary fw-semibold text-start ">Price</p>
                                <p className="col fs-5 text-primary text-end ">EGY {productDet.price}</p>
                            </div>
                            <div className="px-3">
                                <p className="m-0 p-0">$20 Shipping  Fees Deposit</p>
                                <p className="m-0 p-0">Delivery Sun, Oct 23</p>
                                <p className="m-0 p-0"> or fastest delivery Fri, Oct 14</p>
                            </div>
                            <div className="px-4">
                                <button className="btn btn-outline-primary form-control m-2 rounded-5" href="/cart" onClick={()=>addToCart(productDet)}>Buy Now</button>
                                {productDet.ableToExchange==="true" &&
                                    <>
                                        <p className="m-0 p-0"><i className="fa-solid fa-circle-check" /> This product is replaceable</p>
                                        <button className="btn btn-outline-primary form-control m-2 rounded-5" onClick={()=>{exchange(productDet)}}>Exchange</button>
                                    </>}
                            </div>
                        </div>
                    </div>
                    <div className="border border-1 rounded-2">
                        <div className="container py-4">
                            <h4 className="text-primary pb-3 border-bottom border-primary border-opacity-75 mb-3">Details</h4>
                            <div className="row px-3">
                                <p className="col m-0">Duration of use:</p>
                                <p className="col m-0">{productDet.durationOfUse}</p>
                            </div>
                            <div className="row px-3">
                                <p className="col m-0">Hard size:</p>
                                <p className="col m-0">{productDet.secondFilter}</p>
                            </div>
                            <div className="row px-3">
                                <p className="col m-0">Location:</p>
                                <p className="col m-0">{productDet.location}</p>
                            </div>
                            <div className="row px-3">
                                <p className="col m-0">Color:</p>
                                <p className="col m-0">{productDet.color}</p>
                            </div>
                            <div className="row px-3">
                                <p className="col m-0">Brand:</p>
                                <p className="col m-0">{productDet.brand}</p>
                            </div>
                            <div className="row px-3">
                                <p className="col m-0">Ram size:</p>
                                <p className="col m-0">{productDet.firstFilter}</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProductDetails;