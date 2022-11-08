import React, { useState } from 'react';
import { Carousel } from "react-bootstrap";

function Choose_us_section() {

    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        if (selectedIndex >= 3 || selectedIndex < 0) {
            this.setIndex(0);
        } else if (selectedIndex !== index) {
            setIndex(selectedIndex);
        }
    };
    return (
        <section className="my-5">
            <h2 className="fs-1 fw-bold text-center my-4"><span className="text-primary">Why</span> Choose Us <span className="text-primary">?</span> </h2>
            <div className="container">
                <div className="shadow rounded-3">
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                        <Carousel.Item>
                            <div className="img1 d-block w-100 " style={{ height: '350px' }}>
                                <div className="w-50 float-end  me-5 p-5">
                                    <h3 className="text-center"> <span className="text-primary">S</span>ell , <span className="text-primary">B</span>uy &amp; <span className="text-primary">E</span>xchange</h3>
                                    <p className=" mt-5 fw-semibold"><span className="text-primary">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia expedita sequi,
                                        fugit, eos sunt qui nisi laborum quo soluta perferendis,
                                        quisquam minima. Minima eligendi nemo rerum. Id doloribus possimus dolorum.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item>
                            <div className="img2 d-block w-100 " style={{ height: '350px' }}>
                                <div className="w-50 float-end  me-5 p-5">
                                    <h3 className="text-center"> <span className="text-primary">S</span>ell , <span className="text-primary">B</span>uy &amp; <span className="text-primary">E</span>xchange</h3>
                                    <p className=" mt-5 fw-semibold"><span className="text-primary">L</span>orem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia expedita sequi,
                                        fugit, eos sunt qui nisi laborum quo soluta perferendis,
                                        quisquam minima. Minima eligendi nemo rerum. Id doloribus possimus dolorum.
                                    </p>
                                </div>
                            </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </section>
    )
}

export default Choose_us_section