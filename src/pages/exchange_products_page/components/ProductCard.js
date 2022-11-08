import React, { useEffect, useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import { axiosInstance } from "../../../config/axios";
import "./ProductCard.css";

function ProductCard(props) {
  const [product, setProduct] = useState({
    data: {
      ableToExchange: false,
      brand: "",
      categoryId: "",
      color: "",
      description: "",
      durationOfUse: "",
      firstFilter: "",
      img: [],
      price: 0,
      secondFilter: "",
      status: "pending",
      thirdFilter: "",
      time: "",
      title: "",
      userId: "",
      _id: "",
    },
    category: {
      firstFilter: {},
      secondFilter: {},
      thirdFilter: {},
    },
  });

  useEffect(() => {
    getProduct();
  }, []);

  async function getProduct() {
    await axiosInstance
      .get(`product/getProduct/${props.productId}`)
      .then((res) => {
        console.log(res);
        setProduct(res.data);

        // console.log(product.data.title)
      })
      .catch((err) => console.log("Error"));
  }

  return (
    <article className="card mx-0 w-100">
      <div className="row">
        <p className="col fs-5">{product.data.title}</p>
        <p className="col-3 me-3 text-center p-1 fw-bold  rounded-2 border border-primary text-primary fs-5">
          {product.data.price} EGP
        </p>
      </div>
      <div className="container w-100 h-100 rounded-2 border py-2 my-2 bg-black">
        <Carousel fade interval={null} style={{ height: "300px" }}>
          {product.data.img.map((img) => (
            <Carousel.Item className="d-flex justify-content-center">
              <img
                className="d-block"
                src={`http://localhost:4000/${img}`}
                alt={"product images"}
              />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <p className="fs-5 mt-3">Details</p>
      <div className="container text-capitalize">
        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            Brand:
          </div>
          <div className="col">{product.data.brand}</div>
        </div>
        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            Color:
          </div>
          <div className="col">{product.data.color}</div>
        </div>
        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            Duration of use:
          </div>
          <div className="col">{product.data.durationOfUse}</div>
        </div>
        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            {product.category.firstFilter.title}:
          </div>
          <div className="col">{product.data.firstFilter}</div>
        </div>

        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary ">
            {product.category.secondFilter.title}
          </div>
          <div className="col">{product.data.secondFilter}</div>
        </div>

        <div className="row mb-2 bg-light">
          <div className="col-4 border-start border-5 border-primary">
            {product.category.thirdFilter.title}:
          </div>
          <div className="col">{product.data.thirdFilter}</div>
        </div>
      </div>
      <p className="fs-5 mt-3">Description</p>
      <p className="fs-6 fw-normal border border-2 rounded-2 p-2">
        {product.data.description}
      </p>
    </article>
  );
}

export default ProductCard;
