import React, {useEffect,useState} from 'react';
import { axiosInstance } from "../../config/axios";

function ConfirmLeft() {
    const user=JSON.parse(localStorage.getItem("authorization"))
    const [usr,setUsr]=useState({})
    useEffect(()=>{
        axiosInstance.get(`/user/getUser/${user}`).then((res)=>{
            setUsr(res.data)
        })
    },[])

    return (
        <>
            <article className="article bg-white p-5 border border-secondary border-opacity-50 rounded-5">
                <div className="shippinginfo">
                    <h3 className="pb-3">Process info</h3>
                    <div className="struct d-flex justify-content-between pb-5 border-bottom border-secondary border-opacity-50">
                        <div className="title fw-bold">
                            {/* <p className="seller">Seller: </p> */}
                            <p className="buyer">Buyer: </p>
                            <p className="kind">Kind of process: </p>
                            <p className="address">Address of shipping: </p>
                        </div>
                        <div className="info">
                            <p>{usr.userName}</p>
                            {/* <p>Abdulrahman Hossam</p> */}
                            <p>Selling</p>
                            <p>{usr.address}</p>
                        </div>
                    </div>
                </div>
                <div className="payment pt-5">
                    <h3 className="pb-3">Payment method</h3>
                    <div className="form-check py-1">
                        <input className="form-check-input" type="radio" id="choosewallet" name="money" defaultValue="choosewallet" />
                        <label className="form-check-label ps-2" htmlFor="choosewallet">Your balance from your wallet</label><br />
                    </div>
                    <div className="form-check py-1">
                        <input className="form-check-input" type="radio" id="choosecard" name="money" defaultValue="choosecard" />
                        <label className="form-check-label ps-2" htmlFor="choosecard">Add a credit or debit card</label><br />
                    </div>
                    <div className="form-check py-1">
                        <input className="form-check-input" type="radio" id="choosecash" name="money" defaultValue="choosecash" />
                        <label className="form-check-label ps-2" htmlFor="choosecash">Cash on delivery (COD)</label><br />
                    </div>
                </div>
            </article>
        </>
    );
}
export default ConfirmLeft;