import { React, useEffect, useState } from 'react';
import ProductCategoriesContent from './ProductCategoriesContent';
import ProductCategoriesFilter from './ProductCategoriesFilter';
import '../Styling/prouduct_category.css'
import { useLocation } from 'react-router';
import axios from 'axios';


function ProductCategory() {

    var x = useLocation().state
    var [prod, setPro] = useState([]);
    var [all, setAll] = useState([]);
    var [searched,setSearched] = useState([]);

    useEffect(function () {
        // axios.get(`http://localhost:4000/product/productsofcategory/${x._id}`).then((res) => {
        //     setAll(res.data)
        //     setPro(res.data);
        // });
        axios.get(`http://localhost:4000/product/products`).then((res) => {
        setAll(res.data)
        setPro(res.data);
        })
    }, [])

    function brandfliter(type) {
        if (type) {
            var x = prod.filter((item) => item.brand === type);
            setPro([...x]);
        }
        else setPro([...all])
    }

    function durationfliter(type) {
        if (type) {
            var x = prod.filter((item) => item.durationOfUse === type);
            setPro([...x]);
        }
        else setPro([...all])
    }

    function firstFilterFilter(type) {
        if (type) {
            var x = prod.filter((item) => item.firstFilter === type);
            setPro([...x]);
        }
        else setPro([...all])
    }

    function secondFilterFilter(type) {
        if (type) {
            var x = prod.filter((item) => item.secondFilter === type);
            setPro([...x]);
        }
        else setPro([...all])
    }

    function thirdFilterFilter(type) {
        if (type) {
            var x = prod.filter((item) => item.thirdFilter === type);
            setPro([...x]);
        }
        else setPro([...all])
    }
    
    function colorfliterFilter(type) {
        if (type) {
            var x = prod.filter((item) => item.color === type);
            setPro([...x]);
        }
        else setPro([...all])
    }
    

    return (
        <>
            <div className="px-5 py-3">
                <section className="row justify-content-between mt-lg-3">
                    <ProductCategoriesFilter brand={brandfliter} duration={durationfliter} firstFilterKey={firstFilterFilter} secondFilterKey={secondFilterFilter} thirdFilterKey={thirdFilterFilter} colorfliterKey={colorfliterFilter}></ProductCategoriesFilter>
                    <ProductCategoriesContent data={prod}></ProductCategoriesContent>
                </section>
            </div>
            {/* <Footer></Footer> */}
        </>
    );
}

export default ProductCategory;