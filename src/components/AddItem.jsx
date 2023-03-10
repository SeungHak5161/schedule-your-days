import { useState } from "react";
import { createItem } from "libs/ddbApi";
import { useContext } from "react";
import { AppContext } from "./Layout";

export const AddItem = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");
  const context = useContext(AppContext);
  const bottomOpened = context.bottomOpened;
  const setBottomOpened = context.setBottomOpened;
  // const [name,setName]=useState("")
  const addHandler = (e) => {
    switch (e.target.id) {
      case "itemName":
        setName(e.target.value);
        break;
      case "itemContent":
        setContent(e.target.value);
        break;
      case "addItemBtn":
        createItem({ NAME: name, CONTENT: content });
        break;
      default:
        console.log("addHandler exception");
        break;
    }
  };
  return (
    <div
      className={`bottomUpLayer ${
        bottomOpened ? "bottomOpend" : "bottomClosed"
      }`}
    >
      <div id="xIcon" onClick={() => setBottomOpened(false)}>
        <div id="xIconFirst"></div>
        <div id="xIconSecond"></div>
      </div>
      <div id="addItemContentWrapper">
        <div className="addItemElem">
          <div className="addItemElemInput">
            <input
              id="itemName"
              className="inputLarge"
              placeholder="제목"
              onChange={addHandler}
            />
          </div>
          <div id="colorPicker"></div>
        </div>
        <div className="addItemElem">
          <div className="addItemElemInput">
            <input
              id="itemContent"
              className="inputMedium"
              placeholder="내용"
              onChange={addHandler}
            />
          </div>
        </div>
        <div className="addItemElem">
          <div className="addItemElemInput">
            <input id="itemTime" className="inputMedium" placeholder="시간" />
          </div>
        </div>
        <button id="addItemBtn" className="inputMedium" onClick={addHandler}>
          추 가
        </button>
      </div>
    </div>
  );
};
export default AddItem;
