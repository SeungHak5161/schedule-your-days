export const AddItem = ({ bottomOpened, setBottomOpened }) => {
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
            ></input>
          </div>
          <div id="colorPicker"></div>
        </div>
        <div className="addItemElem">
          <div className="addItemElemInput">
            <input
              id="itemContent"
              className="inputMedium"
              placeholder="내용"
            ></input>
          </div>
        </div>
        <div className="addItemElem">
          <div className="addItemElemInput">
            <input
              id="itemTime"
              className="inputMedium"
              placeholder="시간"
            ></input>
          </div>
        </div>
        <button id="addItemBtn" className="inputMedium">
          추 가
        </button>
      </div>
    </div>
  );
};
export default AddItem;
