import { React, useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router';

function ProductCategoriesFilter(props) {

    var x = useLocation().state
    
    function brand(e) {
        if (e.target.checked)
            props.brand(e.target.value);
        else
            props.brand("");
    }

    function duration(e) {
        if (e.target.checked)
            props.duration(e.target.value);
        else
            props.duration("");
    }

    function firstFilterKey(e) {
        if (e.target.checked)
            props.firstFilterKey(e.target.value);
        else
            props.firstFilterKey("");
    }

    function secondFilterKey(e) {
        if (e.target.checked)
            props.secondFilterKey(e.target.value);
        else
            props.secondFilterKey("");
    }

    function thirdFilterKey(e) {
        if (e.target.checked)
            props.thirdFilterKey(e.target.value);
        else
            props.thirdFilterKey("");
    }

    function colorfliterKey(e) {
        if (e.target.checked)
            props.colorfliterKey(e.target.value);
        else
            props.colorfliterKey("");
    }

    return (
        <>
            <button className="btn btn-outline-primary w-25 m-3 border border-1 d-lg-none" data-bs-toggle="offcanvas" data-bs-target="#ee"><i className="fa-solid fa-filter" /> Filter </button>
            <div className="col-lg-2 offcanvas-lg offcanvas-start " id="ee">
                <div className="flex-shrink-0 bg-white">
                    <div className="d-flex justify-content-between align-items-center w-100 border-bottom pb-2">
                        <h3 className="fs-5 fw-semibold text-primary"><i className="fa-solid fa-filter" /> Filter</h3>
                        <button className="btn btn-outline-primary  d-lg-none " data-bs-toggle="offcanvas" data-bs-target="#ee"><i className="fa-solid fa-xmark" /></button>
                    </div>
                    <ul className="list-unstyled ps-0">
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#Brand" aria-expanded="true">{x.title==="Antiques"&& "Country"} {x.title!=="Antiques"&& "Brand"}</button>
                            <div className="collapse show" id="Brand">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                                        {
                                            x.brands.map((br,idx)=>{
                                                return <li key={idx}><input className="form-check-input" type="checkbox" name="brand" value={br} onChange={brand} /> {br} </li>
                                            }).slice(0,15)
                                        }
                                    </ul>
                                </form>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#DURATION-OF-USE" aria-expanded="true">Duration Of Use</button>
                            <div className="collapse" id="DURATION-OF-USE">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='Up to 6 months' onChange={duration} /> Up to 6 months </li>
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='1 Year' onChange={duration} /> 1 Year </li>
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='2 Year' onChange={duration} /> 2 Year</li>
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='3 Year' onChange={duration} /> 3 Year </li>
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='4 Year' onChange={duration} /> 4 Year </li>
                                        <li><input className="form-check-input" type="checkbox" name="durationOfUse" value='5 Years and more' onChange={duration} /> 5 Years and more</li>
                                    </ul>
                                </form>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#MEMORY-SIZE" aria-expanded="true">{x.title==="Antiques"&& "Type"} {x.title==="Home Appliances"&& "Type"} {x.title==="Console Games"&& "OS"} {x.title==="Mobile & Tablet"&& "Storage Area"} {x.title==="PC & Laptop"&& "Hard Storage Area"} {x.title==="Camera"&& "Storage Area"}</button>
                            <div className="collapse" id="MEMORY-SIZE">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                                    {
                                        x.firstFilter.options.map((br,idx)=>{
                                            return <li key={idx}><input className="form-check-input" type="checkbox" name="brand" value={br} onChange={firstFilterKey} /> {br} </li>
                                        })
                                    }
                                    </ul>
                                </form>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#RAM-SIZE" aria-expanded="true"> {x.title==="Antiques"&& "Lengths"} {x.title==="Home Appliances"&& "Material"} {x.title==="Console Games"&& "Type of Storage"} {x.title==="Mobile & Tablet"&& "RAM Size"} {x.title==="PC & Laptop"&& "RAM Size"} {x.title==="Camera"&& "Resolution"} </button>
                            <div className="collapse" id="RAM-SIZE">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                                    {
                                        x.secondFilter.options.map((br,idx)=>{
                                            return <li key={idx}><input className="form-check-input" type="checkbox" name="brand" value={br} onChange={secondFilterKey} /> {br} </li>
                                        })
                                    }
                                    </ul>
                                </form>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#Color" aria-expanded="true">Color</button>
                            <div className="collapse show" id="Color">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small d-flex gap-2 flex-wrap ps-4">
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'black' }} value="black" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'red' }} value="red" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'blue' }} value="blue" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'gray' }} value="gray" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'gold' }} value="gold" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'pink' }} value="pink" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'white' }} value="white" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'greenyellow' }} value="greenyellow" onChange={colorfliterKey} /></li>
                                        <li><input className="form-check-input" type="checkbox" style={{ width: '30px', height: '20px', backgroundColor: 'yellow' }} value="yellow" onChange={colorfliterKey} /></li>
                                    </ul>
                                </form>
                            </div>
                        </li>
                        <li className="mb-1">
                            <button className="btn btn-toggle d-inline-flex align-items-center rounded border-0 collapsed w-100 text-primary" data-bs-toggle="collapse" data-bs-target="#SIM-CARD" aria-expanded="true">{x.title==="Antiques"&& "widths"} {x.title==="Home Appliances"&& "Size"} {x.title==="Console Games"&& "Accessories"} {x.title==="Mobile & Tablet"&& "SIM Card"} {x.title==="PC & Laptop"&& "Processor"} {x.title==="Camera"&& "Camera lens"}</button>
                            <div className="collapse" id="SIM-CARD">
                                <form>
                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small ps-4">
                                    {
                                        x.thirdFilter.options.map((br,idx)=>{
                                            return <li key={idx}><input className="form-check-input" type="checkbox" name="brand" value={br} onChange={thirdFilterKey} /> {br} </li>
                                        })
                                    }
                                    </ul>
                                </form>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default ProductCategoriesFilter;