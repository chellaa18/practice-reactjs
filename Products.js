import React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


const Products = () => {
  const [products, setProducts] = useState([]);

  const navigate = useNavigate();
  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then((res) => res.json())
      .then((data) => {
       
        setProducts(data.products);
      
      });
  }, [products]);


  return (
    <>
      <div className="container mt-4">
        <h4 style={{ color: "#d51c9a" }}>Products</h4>
        <div className="row d-flex">
          {(products.length > 0)? products.map((product, i) => {
            return (
              <div className="card ms-2 mt-2 col-lg-3 m-1" key={product.id}>
                <img src={product.images[0]} className="card-img-top" alt="products"></img>
                <div className="card-body p-4">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">Price: ${product.price}</p>
                  <p>Only {product.stock} left..</p>
                </div>
                <button className="view-button mb-4" onClick={()=>navigate(`/viewproduct/${product.id}`)} >View Details</button>
                <button className="pro-button mb-4" >Add to Cart</button>
              </div>
            );
          }): <h2>no data</h2>}
        </div>
      </div>
    </>
  );
};

export default Products;
