import { useContext } from "react";
import { AppContext } from "./Layout";
export const ShieldLayer = () => {
  const context = useContext(AppContext);
  const menuOpened = context.menuOpened;
  const setMenuOpened = context.setMenuOpened;
  const bottomOpened = context.bottomOpened;
  const setBottomOpened = context.setBottomOpened;
  return (
    <div
      id="shieldLayer"
      className={menuOpened || bottomOpened ? "DSblock" : "DSnone"}
      onClick={() => {
        setMenuOpened(false);
        setBottomOpened(false);
      }}
    ></div>
  );
};

export default ShieldLayer;
