import { useState } from "react";
import { updateItem } from "libs/ddbApi";
import { useContext } from "react";
import { AppContext } from "./Layout";
import moment from "moment";

export const ItemDetail = () => {
  const context = useContext(AppContext);
  const itemDetail = context.itemDetail;
  const setItemDetail = context.setItemDetail;
  const fetch = context.fetch;

  const [name, setName] = useState(itemDetail.NAME);
  const [content, setContent] = useState({
    content: itemDetail.CONTENT,
    date: itemDetail.DATE,
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
      case "updateItemBtn":
        updateItem({
          ...itemDetail,
          update: {
            NAME: name,
            CONTENT: content.content,
            DATE: content.date,
          },
        }).then(() => fetch());
        setItemDetail(false);
        break;
      default:
        console.log("addHandler exception");
        break;
    }
  };
  return (
    <div
      className={`bottomUpLayer ${itemDetail ? "bottomOpend" : "bottomClosed"}`}
    >
      <div
        id="xIcon"
        onClick={() => {
          setItemDetail(false);
        }}
      >
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
              defaultValue={itemDetail.NAME}
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
              onChange={addHandler}
              defaultValue={itemDetail.CONTENT}
            ></textarea>
          </div>
        </div>
        <div className="addItemElem">
          <input
            id="itemDate"
            type="date"
            defaultValue={itemDetail.DATE}
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
        <button id="updateItemBtn" className="inputMedium" onClick={addHandler}>
          수 정
        </button>
      </div>
    </div>
  );
};
export default ItemDetail;
