import "./Container/Container.css";
import Container from "./Container/Container"

export default function ProductsHeader({productsData, error}) {
  return (
    <Container productsData={productsData} error={error}/>
  );
}
