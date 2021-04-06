import React from "react";
import MenuLinks from "./MenuLinks.js" 
import Search from "./Search.js"
import Logo from "./Logo.js"

function SideMenu() {
  return (
    <aside className="side-bar open">
      <Logo/> 
      <MenuLinks/>
      <Search />
      </aside>
  );
}

export default SideMenu;
