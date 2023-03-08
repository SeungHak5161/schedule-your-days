export const AddBtn = ({ setBottomOpened }) => {
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
