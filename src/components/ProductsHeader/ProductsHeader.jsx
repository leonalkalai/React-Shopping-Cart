import "./Container/Container.css";
import Container from "./Container/Container"

export default function ProductsHeader({productsData}) {
  return (
    <Container productsData={productsData}/>
  );
}
