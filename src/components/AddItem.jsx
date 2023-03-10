import { useState } from "react";
import { createItem } from "libs/ddbApi";
import { useContext } from "react";
import { AppContext } from "./Layout";
import moment from "moment";

export const AddItem = () => {
  const context = useContext(AppContext);
  const addItemOpened = context.addItemOpened;
  const setAddItemOpened = context.setAddItemOpened;
  const fetch = context.fetch;

  const [name, setName] = useState("");
  const [content, setContent] = useState({
    content: "",
    date: moment().format("YYYY-MM-DD"),
    // color: "",
  });

  const addHandler = (e) => {
    switch (e.target.id) {
      case "itemName":
        setName(e.target.value);
        break;
      case "itemContent":
        setContent({ ...content, content: e.target.value });
        break;
      case "itemDate":
        setContent({ ...content, date: e.target.value });
        break;
      case "addItemBtn":
        createItem({
          NAME: name,
          CONTENT: content.content,
          DATE: content.date,
        }).then(() => fetch());
        setAddItemOpened(false);
        setName("");
        setContent({
          content: "",
          date: moment().format("YYYY-MM-DD"),
          // color: "",
        });
        break;
      default:
        console.log("addHandler exception");
        break;
    }
  };
  return (
    <div
      className={`bottomUpLayer ${
        addItemOpened ? "bottomOpend" : "bottomClosed"
      }`}
    >
      <div id="xIcon" onClick={() => setAddItemOpened(false)}>
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
              value={name}
              onChange={addHandler}
            />
          </div>
          <div id="colorPicker"></div>
        </div>
        <div className="addItemElem">
          <div className="addItemElemInput">
            <textarea
              id="itemContent"
              className="inputMedium"
              placeholder="내용"
              value={content.content}
              onChange={addHandler}
            />
          </div>
        </div>
        <div className="addItemElem">
          <input
            id="itemDate"
            type="date"
            value={content.date}
            onChange={addHandler}
          />
        </div>
        {/* <div className="addItemElem">
          <div className="addItemElemInput">
            <input
              id="itemTime"
              className="inputMedium"
              placeholder="소요시간"
            />
          </div>
        </div> */}
        <button id="addItemBtn" className="inputMedium" onClick={addHandler}>
          추 가
        </button>
      </div>
    </div>
  );
};
export default AddItem;
