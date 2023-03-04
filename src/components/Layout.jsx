import { useState } from "react";
import "styles/layout.scss";
export const Layout = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <main id="layout">
      <aside
        id="menu"
        className={menuOpened ? "menuOpend" : "menuClosed"}
      ></aside>
      {menuOpened ? (
        <button className="menuBtn" onClick={() => setMenuOpened(!menuOpened)}>
          <div id="closeMenuT"></div>
          <div id="closeMenuM"></div>
          <div id="closeMenuB"></div>
        </button>
      ) : (
        <button className="menuBtn" onClick={() => setMenuOpened(!menuOpened)}>
          <div id="openMenuT"></div>
          <div id="openMenuM"></div>
          <div id="openMenuB"></div>
        </button>
      )}
      <button id="addBtn">
        <div id="plusIcon">
          <div id="plusIconH"></div>
          <div id="plusIconV"></div>
        </div>
      </button>
    </main>
  );
};
export default Layout;
