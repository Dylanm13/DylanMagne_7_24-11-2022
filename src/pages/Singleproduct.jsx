import {useParams } from "react-router-dom"

import products from "../__mocks__/data.json"

import Slideshow from "../components/Slideshow"
import Collapse from "../components/Collapse"
import Tags from "../components/Tags"
import Rating from "../components/Rating"
import Server from "../components/Server"

const SingleProduct = () => {
    const { productId } = useParams()
    const product = products.find((product) => product.id === productId);
    const { title, location, rating, host, equipments, description, pictures } =
      product

      return (
        <div className="singleproduct">
          <Slideshow slides={pictures} />
          <div className="singleproduct__content">
            <div className="singleproduct__informations">
              <h1 className="singleproduct__title">{title}</h1>
              <p className="singleproduct__location">{location}</p>
              <div className="singleproduct__tags">
                {product.tags.map((tag, index) => (
                  <Tags key={index} getTag={tag} />
                ))}
              </div>
            </div>
            <div className="singleproduct__rating-and-host">
              <Rating rating={rating} />
              <Server host={host} />
            </div>
          </div>
          <div className="singleproduct__dropdowns">
            <Collapse title="Description" content={description} />
            <Collapse title="Équipement" content={equipments} />
          </div>
        </div>
      );
    };
    
    export default SingleProduct;