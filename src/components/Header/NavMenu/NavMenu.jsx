import "./NavMenu.css";

export default function NavMenu() {
  return (
    <>
      <div className="navigation">
        <a href="#">Just In</a>
        <a href="#">Men</a>
        <a href="#">Women</a>
        <a href="#">Brands</a>
        <a className="active" href="#">
          Sales
        </a>
      </div>
    </>
  );
}
