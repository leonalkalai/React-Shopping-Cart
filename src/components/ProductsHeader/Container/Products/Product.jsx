import { useEffect, useState, useContext } from "react";
import { AppContext } from "../../../../App";

export default function Product(
  // {
  //   id,
  //   title,
  //   price,
  //   description,
  //   category,
  //   image,
  //   rating,
  //   children,
  // }
  { product }
) {
  const ProductProperties = {
    id: product.id,
    price: product.price,
    image: product.image,
    description: product.description,
  };

  const { counter, setCounter } = useContext(AppContext);

  const [favorite, setFavorite] = useState(false);
  const [cartStatus, toggleCartStatus] = useState(false);

  useEffect(() => {}, [favorite, cartStatus]);

  const setFavoriteHandler = () => {
    setFavorite(!favorite);
  };

  // BAD
  //   const toggleCartStatusHandler = () => {
  //     toggleCartStatus(!cartStatus);
  //   };

  //   const UpdateCartStatusHandler = () => {
  //     toggleCartStatus(prevCartStatus => {
  //       updateCounter(!prevCartStatus ? counter - 1 : counter + 1);
  //     });
  //   };

  const updateCounter = (value) => {
    setCounter(value);
  };

  const toggleCartStatusHandler = () => {
    const currentCartStatus = !cartStatus;
    toggleCartStatus(currentCartStatus);
    // Update the counter when cart status is toggled
    updateCounter(currentCartStatus ? counter + 1 : counter - 1);
  };

  return (
    <>
      <div className="thumb-unit">
        <div className="heading">
          {/* <span>${price}</span> */}
          <span>${ProductProperties.price}</span>
          <span onClick={setFavoriteHandler}>
            <i className={`fa fa-heart${favorite ? "" : "-o"}`} />
          </span>
        </div>
        {/* <div className="box" style={{ backgroundImage: `url(${image})` }} /> */}
        <div
          className="box"
          style={{ backgroundImage: `url(${ProductProperties.image})` }}
        />
        <div className="info">
          {/* <p>{description}</p> */}
          <p>{ProductProperties.description}</p>
          <span className="icon" onClick={toggleCartStatusHandler}>
            <i className={`fa fa-shopping-cart ${cartStatus ? "black" : ""}`} />
          </span>
        </div>
      </div>
    </>
  );
}
