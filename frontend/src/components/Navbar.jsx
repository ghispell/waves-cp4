import "../styles/navbar.scss";
import burger from "../assets/menuburger.png";
import profile from "../assets/profile.png";
import wave from "../assets/wave.png";

function Navbar() {
  return (
    <div className="navbar">
      <img src={burger} alt="burgermenu" className="burgerMenu" />

      <h1>WAVES</h1>
      <div className="flex justify-center items-center">
        <h2>Login</h2>
        <img src={profile} alt="profile" className="profile" />
      </div>
    </div>
  );
}

export default Navbar;
