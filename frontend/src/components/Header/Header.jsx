import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food</h2>
        <p>
          Choose from a diverse menu featuring a delectable arrayn of dishes
          crafted with the finest ingredients and culinary experites. Our misson
          is to satisfy your cravings and elevate your dining experience, one
          delicious meal at a time.
        </p>
        <button>view Menu</button>
      </div>
    </div>
  );
}

export default Header;
