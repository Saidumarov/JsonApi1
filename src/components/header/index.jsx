import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <div className="container">
        <div className="add">
          <Link to={"/"}>
            <h1>JSON Placeholder</h1>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
