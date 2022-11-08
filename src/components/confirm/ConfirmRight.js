import React from 'react';
import {useLocation,useNavigate} from 'react-router-dom'

function ConfirmRight() {
    const loc = useLocation().state
    const nav = useNavigate()
    function finish(){
        nav("/home")
    }
    return (
        <>
            <aside className=" bg-white p-5 border border-secondary border-opacity-50 rounded-5">
                <div className="summery pb-5 border-bottom border-secondary border-opacity-50">
                    <h3 className="pb-3">Order Summary:</h3>
                    <div className="d-flex justify-content-between">
                        <div className="fw-bold">
                            <p>Items: </p>
                            <p>Shipping: </p>
                        </div>
                        <div>
                            <p>{loc} EG</p>
                            <p>100 EG</p>
                        </div>
                    </div>
                </div>
                <div className="pt-5 d-flex justify-content-between">
                    <h3>Order Total:</h3>
                    <p className="pt-1 fs-5">{loc+100} EG</p>
                </div>
                <div>
                    <button className="doprocess btn btn btn-outline-primary w-100 mt-4 mb-4 rounded-5" data-bs-toggle="modal" data-bs-target="#staticBackdrop" style={{ fontSize: '13px', fontWeight: 600 }}>Place Order</button>
                </div>
                <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-body text-center">
                                <p>Thank you for shopping</p>
                            </div>
                            <div className="modal-footer justify-content-center">
                                <button type="button" className="btn btn-outline-primary rounded-5" data-bs-dismiss="modal" onClick={()=>finish()}>Go to Home</button>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default ConfirmRight;