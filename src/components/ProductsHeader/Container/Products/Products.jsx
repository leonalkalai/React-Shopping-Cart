import "./Products.css";
import Product from "./Product";

export default function Products({ productsData,  error }) {
  return (
    <div className="thumb-wrapper">
      {error ? (
        <div>Error: {error.message}</div>
      ) : (
        <>
          {productsData && productsData.length > 0
            ? productsData.map((product) => {
                //console.log(product.image)
                return (
                  // <Product key={product.id} image={product.image} id={product.id} title={product.title} />
                  <Product key={product.id} product={product} />
                );
              })
            : "no products"}
        </>
      )}
    </div>
  );
}
