import React, { useState,useEffect } from 'react';
import {store} from '../../Redux/Store';
import {useFormik} from 'formik';
import * as yup from 'yup';
import { axiosInstance } from "../../config/axios";
import {useNavigate} from 'react-router-dom'

function CartPrice({data}) {

    const user=JSON.parse(localStorage.getItem("authorization"))
    const [usr,setUsr]=useState({})
    const nav=useNavigate()

    useEffect(()=>{
        axiosInstance.get(`/user/getUser/${user}`).then((res)=>{
            setUsr(res.data)
        })
    },[])
    
    const formikcart=useFormik({
        initialValues:
        {
            phoneNumber:'',
            address:'',
        },

        validationSchema:yup.object().shape({
          phoneNumber:yup.string().min(11," you Most enter of eleven numbers "),
          address:yup.string()}),

        onSubmit:(values)=>
        {
            if(values.phoneNumber===''){
            values.phoneNumber=usr.phoneNumber
            }
            if(values.address===''){
            values.address=usr.address
            }
            axiosInstance.patch(`/user/updateUser/${user}`,values).then((res)=>{
                nav(`/confirm/${user}`,{state:data})
            })
        },
    });

    const[datas,setDate]=useState(data);

    store.subscribe(() => {
        setDate([...store.getState().cart]);
    });

    return (
        <>
            <div className="col-3" style={{marginTop:104}}>
                <div className=" w-100">
                    <aside className=" bg-white py-5  border rounded-3   text-center" style={{ height: 'fit-content' }}>
                        <div className="sum pb-3 px-5">
                            <h5>Total Price: </h5>
                            <p className="pt-1">{data} EGY</p>
                        </div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-outline-primary border border-1  w-75 rounded-5" data-bs-toggle="modal" data-bs-target="#exampleModal">
                            Proceed
                        </button>
                        <div className="modal fade bg-black bg-opacity-75" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header bg-primary">
                                        <h5 className="modal-title text-light" id="exampleModalLabel">Proceed</h5>
                                        <button className="btn-close" data-bs-dismiss="modal" aria-label="Close" />
                                    </div>
                                    <div className="modal-body p-5 text-start">
                                        <form onSubmit={formikcart.handleSubmit}>
                                            <div className="mb-3 border-bottom border-primary border-opacity-50 pb-3 d-flex justify-content-between">
                                                <p className="form-label">User Name:</p>
                                                <p>{usr.userName}</p>
                                            </div>
                                            <div className="mb-3 border-bottom border-primary border-opacity-50 pb-3">
                                                <div className="d-flex justify-content-between pb-2">
                                                    <p className="form-label">Phone Number:</p>
                                                    <p className="form-label">{usr.phoneNumber}</p>
                                                </div>
                                                <div className="d-flex">
                                                    <input type="text" className="form-control" id="telp" name="phoneNumber" placeholder="Add another phone number" value={formikcart.values.phoneNumber} onChange={formikcart.handleChange}/>
                                                    <button className="btn text-primary"><i className="fa-solid fa-plus" /></button>
                                                </div>
                                            </div>
                                            <div className="mb-3">
                                                <p className="form-label">Address:</p>
                                                <p className="form-label" style={{ fontSize: '12px' }}>{usr.address}</p>
                                                <div className="d-flex">
                                                    <input type="text" className="form-control" id="tela" name="address" placeholder="Add another address" value={formikcart.values.address} onChange={formikcart.handleChange}/>
                                                    <button className="btn text-primary"><i className="fa-solid fa-plus" /></button>
                                                </div>
                                            </div>
                                            <button data-bs-dismiss="modal" aria-label="Close" type="submit" className="btn btn-primary form-control mt-3">Proceed</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
}

export default CartPrice;