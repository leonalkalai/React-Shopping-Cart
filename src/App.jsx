import { useEffect, useState, createContext, useContext } from "react";
import Shop from "./Shop";
import "./App.css";

export const AppContext = createContext();

const ProductsURL = '/products.json';

function App() {
  const [counter, setCounter] = useState(0);
  const counterState = { counter, setCounter };
  const [ productsData, setProductsData ] = useState([]);
  useEffect(function runOnceAfterDOMUpdate(){
    console.log("Component just updated!");
    fetch(ProductsURL)
    .then( res => res.json())
    .then( products => {
     // console.log(products)
      setProductsData(products);
    })
    .catch( error =>{
      console.log(error);
    })
  },[]);
  return (
    <>
     <AppContext.Provider value={counterState}>
       <Shop productsData={productsData}/>
    </AppContext.Provider>
    </>
  );
}
export default App;
