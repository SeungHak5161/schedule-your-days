export const SideMenu = ({ menuOpened, setMenuOpened }) => {
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
