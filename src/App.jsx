import { useEffect, useState, createContext, useContext } from "react";
import Shop from "./Shop";
import "./App.css";

export const AppContext = createContext();

//const ProductsURL = '/products.json';
const ProductsURL = 'https://raw.githubusercontent.com/leonalkalai/React-Shopping-Cart/main/public/products.json';

const handleResponse = (res) => {
 // Log the response status
  if (res.status === 404) {
    throw new Error("Failed to fetch products");
  } else if (res.status === 200) {
    return res.json();
  }
  else{
    throw new Error("Something is Wrong with the Data");
  }
}

function App() {
  const [error, setError] = useState(null);
  const [counter, setCounter] = useState(0);
  const counterState = { counter, setCounter };
  const [ productsData, setProductsData ] = useState([]);
  useEffect(function runOnceAfterDOMUpdate(){
    console.log("Component just updated!");
    fetch(ProductsURL)
    .then(handleResponse)
    //.then( res => res.json())
    .then( products => {
      setProductsData(products);
    })
    .catch( error =>{
      console.log(error);
      setError(error); 
    })
  },[]);
  return (
    <>
     <AppContext.Provider value={counterState}>
       <Shop productsData={productsData} error={error}/>
    </AppContext.Provider>
    </>
  );
}
export default App;
