import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import ReactCardSlider from 'react-card-slider-component';

function ProductSlider() {
    
    let brandPro = useLocation().state;
    const [slides, setslider] = useState([])
    const nav = useNavigate();
    function gotod(data) {
        nav("/product", { state: data })
    }
    useEffect(() => {
        axios.get(`http://localhost:4000/product/products/${brandPro._id}`).then((res) => {
            // console.log(res.data)
            const arr = []
            for (let i = 0; i < res.data.length; i++) {
                var url = `http://localhost:4000/${res.data[i].img[1]}`;
                var temp = "";
                for (let x in url) {
                    // console.log(res.data[i])
                    if (url[x] == '\\')
                        temp += '/';
                    else
                        temp += url[x];
                }
                // console.log(res.data[i])
                arr.push({ image: temp, title: res.data[i].title, description: res.data[i].durationOfUse, clickEvent: () => gotod(res.data[i]) })
            }
            setslider(arr)
        });
    }, [])

    return (
        <>
            <div className='container'>
                <ReactCardSlider slides={slides} />
            </div>
        </>
    );
}

export default ProductSlider;