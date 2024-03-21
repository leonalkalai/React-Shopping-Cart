import Close from "./Close/Close"
import "./Results.css";

export default function Results({productsData}) {
  return (
    <div className="sub-header">
      <h2 className="title">
        Bags<span> {productsData.length} results</span>
      </h2>
      <Close />
    </div>
  );
}
