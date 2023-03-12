import { useContext } from "react";
import { AppContext } from "./Layout";
export const ShieldLayer = () => {
  const context = useContext(AppContext);
  const menuOpened = context.menuOpened;
  const setMenuOpened = context.setMenuOpened;
  const addItemOpened = context.addItemOpened;
  const setAddItemOpened = context.setAddItemOpened;
  const itemDetail = context.itemDetail;
  const setItemDetail = context.setItemDetail;
  return (
    <div
      id="shieldLayer"
      className={
        menuOpened || addItemOpened || itemDetail ? "DSblock" : "DSnone"
      }
      onClick={() => {
        setMenuOpened(false);
        setAddItemOpened(false);
        setItemDetail(false);
      }}
    ></div>
  );
};

export default ShieldLayer;
