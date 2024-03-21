import "./Container.css";
import Results from "./Results/Results";
import Products from "./Products/Products";

export default function Container({ productsData, error}) {
  return (
    <div className="container">
      <Results productsData={productsData} />
      <Products productsData={productsData} error={error}/>
    </div>
  );
}
