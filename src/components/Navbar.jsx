export const Navbar = ({ menuOpened, setMenuOpened }) => {
  return (
    <nav>
      {menuOpened || (
        <button className="menuBtn" onClick={() => setMenuOpened(!menuOpened)}>
          <div id="openMenuTop"></div>
          <div id="openMenuMiddle"></div>
          <div id="openMenuBottom"></div>
        </button>
      )}
      <button id="prevBtn" onClick={() => {}}>
        <div id="leftArrowTop"></div>
        <div id="leftArrowMiddle"></div>
        <div id="leftArrowBottom"></div>
      </button>
      <button id="nextBtn" onClick={() => {}}>
        <div id="rightArrowTop"></div>
        <div id="rightArrowMiddle"></div>
        <div id="rightArrowBottom"></div>
      </button>
    </nav>
  );
};

export default Navbar;
