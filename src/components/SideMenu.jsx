import { useContext } from "react";
import { AppContext } from "./Layout";

export const SideMenu = () => {
  const context = useContext(AppContext);
  const menuOpened = context.menuOpened;
  const setMenuOpened = context.setMenuOpened;
  return (
    <aside id="sideMenu" className={menuOpened ? "menuOpend" : "menuClosed"}>
      <button className="menuBtn" onClick={() => setMenuOpened(!menuOpened)}>
        <div id="leftArrowTop"></div>
        <div id="leftArrowMiddle"></div>
        <div id="leftArrowBottom"></div>
      </button>
    </aside>
  );
};

export default SideMenu;
