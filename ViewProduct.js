import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const ViewProduct = () => {
  const params = useParams();
  let ids = parseInt(params.id);

  const [viewProduct, setViewProducts] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${ids}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setViewProducts(data);
      });
  }, [ids]);

  // console.log(viewProduct.title);
  // console.log(Object.values(viewProduct));
  const res = Object.values(viewProduct);
  console.log(res);
  // {viewProduct ?  Object.values(`title:${viewProduct.title},branf:${viewProduct.brand} `): <h2>no<h2/>}

  return (
    <div className="container">
      <div className="row d-flex justify-content-center">
        <h2 className="text-white">ViewProduct{params.id}</h2>
        <div className="card ms-2 mt-2 col-lg-3 m-1">
          <div className="card-body p-4">
            <h5 className="card-title">
              {viewProduct ? (
                Object.values(`Brand:${viewProduct.title}`)
              ) : (
                <h2>no</h2>
              )}
            </h5>
            <h6>
              {viewProduct ? (
                Object.values(`Price: $${viewProduct.price}`)
              ) : (
                <h2>no</h2>
              )}
            </h6>
            <h6>{Object.values(`stock: $${viewProduct.stock}`)}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProduct;
