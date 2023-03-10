import { useContext } from "react";
import { AppContext } from "./Layout";

export const AddBtn = () => {
  const context = useContext(AppContext);
  const setBottomOpened = context.setBottomOpened;
  return (
    <button id="addBtn" onClick={() => setBottomOpened(true)}>
      <div id="plusIcon">
        <div id="plusIconH"></div>
        <div id="plusIconV"></div>
      </div>
    </button>
  );
};
export default AddBtn;
