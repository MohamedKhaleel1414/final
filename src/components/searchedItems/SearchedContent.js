import React from 'react'
import { useLocation,useNavigate } from 'react-router'

function SearchedContent() {

    const x = useLocation().state;
    const nav = useNavigate();

    function productDetails(data) {
        nav("/product", { state: data })
    }

  return (
    <>
        <div className="col-9 ps-1 mb-5">
                <div className="d-flex flex-column ps-5 w-100">
                    {x.map((item,index)=>{
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
                            <button className="btn btn-outline-primary rounded-5 px-4" onClick={() => productDetails(item)}>View Details</button>
                        </div>
                    </div>
                    })}
                </div>
            </div>
    </>
  )
}

export default SearchedContent