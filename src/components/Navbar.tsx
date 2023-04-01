import "../styles/navbar.scss";
import { Button } from "./Button";
import { Select } from "./Select";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-select-holder">
        <Select
          className="navbar-select"
          title="Location"
          url="https://flagcdn.com/256x192/us.png"
        ></Select>
        <Select
          className="navbar-select"
          title="Loged In"
          url="https://i.pravatar.cc/300"
        ></Select>
      </div>
      <div className="navbar-navtitle-holder">
        <p className="nav-title">Menu</p>
        <p className="nav-logo">Logo</p>
        <p className="nav-title">Contact</p>
      </div>
      <Button className="navbar-cart" title="My Cart"></Button>
    </nav>
  );
};
