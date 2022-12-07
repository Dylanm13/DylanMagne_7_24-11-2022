import {useParams, Navigate } from "react-router-dom"

import products from "../__mocks__/data.json"

import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import Tags from "../components/Tags"
import Rating from "../components/Rating"
import Server from "../components/Server"

const SingleProduct = () => {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId);
    
      return (
        <>
          {
            product ? (
              <div className="singleproduct">
                <Slideshow slides={product?.pictures} />
                <div className="singleproduct__content">
                  <div className="singleproduct__informations">
                    <h1 className="singleproduct__title">{product?.title}</h1>
                    <p className="singleproduct__location">{product?.location}</p>
                    <div className="singleproduct__tags">
                      {product.tags.map((tag, index) => (
                      <Tags key={index} getTag={tag} />
                      ))}
                    </div>
                  </div>
                  <div className="singleproduct__rating-and-host">
                    <Rating rating={product?.rating} />
                    <Server host={product?.host} />
                  </div>
                </div>
                <div className="singleproduct__dropdowns">
                  <Collapse title="Description" content={product?.description} />
                  <Collapse title="Équipement" content={product?.equipments} />
                </div>
              </div>
            ) : <Navigate replace to="*" />
          }
        </>
      );
    };
    
    export default SingleProduct;