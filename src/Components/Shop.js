    import React, { Component, useState } from "react";
    import { Link } from "react-router-dom";
    import bis from "../images/bis.png";
    import br from "../images/bread.png";
    import eg from "../images/eggs.png";
    import ml from "../images/milk.png";

    export default function Shop() {
    const [data, setData] = useState([
        {
        id: "1",
        title: "Whole Grain Bread Large",
        path: "/b",
        price:  100,
        image: br,
        },
        {
        id: "2",
        title: "Bakery Wheat Biscuits 1kg",
        path: "/ff",
        price:  100 ,
        image: bis,
        },
        {
        id: "3",
        title: "Fresh Farm Eggs 1 Dozen",
        path: "/fnv",
        price: 150,
        image: eg,
        },
        {
        id: "4",
        title: "Nestle Milkpak Full Cream 1 Litre",
        path: "/bcc",
        price:  100 ,
        image: ml,
        },
        {
        id: "1",
        title: "Whole Grain Bread Large",
        path: "/b",
        price:  100,
        image: br,
        },
        {
        id: "2",
        title: "Bakery Wheat Biscuits 1kg",
        path: "/ff",
        price: 100 ,
        image: bis,
        },
        {
        id: "3",
        title: "Fresh Farm Eggs 1 Dozen",
        path: "/fnv",
        price:  150,
        image: eg,
        },
        {
        id: "4",
        title: "Nestle Milkpak Full Cream 1 Litre",
        path: "/bcc",
        price:  100 ,
        image: ml,
        },
        {
        id: "4",
        title: "Nestle Milkpak Full Cream 1 Litre",
        path: "/bcc",
        price:  100 ,
        image: ml,
        },
    ]);

    const [cartData, setCartData] = useState([]);
    const handleAddtoCart = (name, price, path, image) => {
        console.log(cartData);
        const cartDataItems = {
        name: name,
        price: price,
        path: path,
        image: image,
        };
        setCartData((cartData) => [...cartData, cartDataItems]);
    };

    
    return (
        <div className="mt-5 mb-5" style={{backgroundColor:'#fffff'}}>
        <div className="row">
            {data.map((data) => {
            return (
                <>
                <div
                    className=" col-md-4 mt-3 mx-auto "
                    key={data.id}
                    style={{ height: "auto" }}
                >
                    <img
                    src={data.image}
                    style={{ height: "200px", width: "200px" }}
                    />
                    <div className="card-body">
                    <h6 className="card-title">{data.title}</h6>
                    <span className="card-title">Rs.{data.price}</span>
                    <p className="card-text"></p>
                    {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    {console.log(data.path)}
                    <Link to>
                        <button
                        type="button"
                        className="btn btn-outline-success rounded-pill"
                        onClick={() => {
                            handleAddtoCart(
                            data.title,
                            data.price,
                            data.path,
                            data.image,
                            );
                            // counter = counter + 1;
                        }}
                        >
                        Add to Cart
                        </button>{" "}
                    </Link>
                    <Link to="/b">
                        <button
                        type="button"
                        className="btn btn-outline-success rounded-pill"
                        >
                        Buy Now
                        </button>{" "}
                    </Link>
                    </div>
                </div>
                </>
            );
            })}
        </div>
        {/* <button
            type="button"
            className="btn btn-danger"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            style={{ fontFamily: "cairo" }}
            onClick={() => this.handleSubmit(data.image, data.title, data.price)}
        >
            Add To Cart
        </button>

        <div
            class="modal fade "
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
        >
            <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    Added To Cart
                </h5>
                <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
                </div>
                <div class="modal-body">
                <span className="">
                    Title: {this.state.CartItemsData.name} <br /> Price:{" "}
                    {this.state.CartItemsData.price}
                </span>
                </div>
                <div class="modal-footer">
                <button
                    type="button"
                    class="btn btn-secondary"
                    data-bs-dismiss="modal"
                >
                    Close
                </button>
                </div>
            </div>
            </div> */}
        {/* </div> */}
        </div>
    );
    }