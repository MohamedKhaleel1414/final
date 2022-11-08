import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { axiosInstance } from '../../config/axios';
import { removeFromCartAction } from '../../Redux/Actions/addToCartAction';
import { store } from '../../Redux/Store'

function CartContent(props) {

    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem("authorization"))
    const [datas, setDate] = useState(props.data);

    store.subscribe(() => {
        setDate([...store.getState().cart]);
    });

    function Removedb(id) {
        axiosInstance.post(`/user/rmovefromcart/${user}/${id}`).then((res) => { })
    }

    // function Remove(id){
    //     const idx = datas.findIndex((x)=>x._id===id);
    //     dispatch(removeFromCartAction(idx));
    // }

    return (
        <>
            <div className="col-9 ps-1 mb-5">
                <div className="d-flex flex-column ps-5 w-100">
                    <h2 className="pb-5 fs-1 text-primary">Your Cart</h2>
                    {/* {datas.map((item,index)=>{
                        return <div className="border rounded-3 p-4 mb-3 shadow-sm" key={index}>
                        <div className="info d-flex justify-content-start">
                            <img src={'http://localhost:4000/'+item.img[0]}  alt={1} style={{ width: '10rem' }} />
                            <div className="ps-3">
                                <p className="pt-2 fw-bold" style={{ fontSize: '25px' }} >{item.title}</p>
                                <p className="fw-semibold mb-1" style={{ fontSize: '17px' }} >Storage: {item.secondFilter} - RAM Size: {item.firstFilter} - Color: {item.color}</p>
                                <p className="fw-semibold mb-1" style={{ fontSize: '17px' }} >Price: {item.price} EGY</p>
                            </div>
                        </div>
                        <div className="actions d-flex justify-content-end">
                            <button className="btn btn-outline-danger rounded-5 px-4" onClick={()=>Remove(item._id)}>Remove from list</button>
                        </div>
                    </div>
                    })} */}

                    {props.old.length !== 0 ?
                        <>
                            {props.old.map((item, index) => {
                                return <div className="border rounded-3 p-4 mb-3 shadow-sm" key={index}>
                                    <div className="info d-flex justify-content-start">
                                        <img src={'http://localhost:4000/' + item.img[0]} alt={1} style={{ width: '10rem' }} />
                                        <div className="ps-3">
                                            <p className="pt-2 fw-bold" style={{ fontSize: '25px' }} >{item.title}</p>
                                            <p className="fw-semibold mb-1" style={{ fontSize: '17px' }} >Storage: {item.secondFilter} - RAM Size: {item.firstFilter} - Color: {item.color}</p>
                                            <p className="fw-semibold mb-1" style={{ fontSize: '17px' }} >Price: {item.price} EGY</p>
                                        </div>
                                    </div>
                                    <div className="actions d-flex justify-content-end">
                                        <button className="btn btn-outline-danger rounded-5 px-4" onClick={() => Removedb(item._id)} data-bs-toggle="modal" data-bs-target="#exampleModal1">Remove from list</button>
                                    </div>
                                </div>
                            })}
                        </> : "Your cart is Empty"}
                    <div className="modal fade" id="exampleModal1" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                        <div className="modal-dialog modal-dialog-centered">
                            <div className="modal-content">
                                <div className="modal-body text-center">
                                    This Item has been deleted!
                                </div>
                                <div className="modal-footer justify-content-center">
                                    <button type="button" className="btn btn-outline-primary rounded-5 px-4" data-bs-dismiss="modal">Ok</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default CartContent;