import Header from "./components/Header/Header"
import ProductsHeader from "./components/ProductsHeader/ProductsHeader"

export default function Shop({ productsData, error }){
return (
  <>
    <Header />
    <ProductsHeader productsData={productsData} error={error}/>
  </>
);
}