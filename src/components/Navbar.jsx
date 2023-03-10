import { useContext } from "react";
import { AppContext } from "./Layout";
import moment from "moment";

export const Navbar = () => {
  const context = useContext(AppContext);
  const menuOpened = context.menuOpened;
  const setMenuOpened = context.setMenuOpened;
  const page = context.page;
  const setPage = context.setPage;
  const setActive = context.setActive;
  return (
    <nav>
      {menuOpened || (
        <button className="menuBtn" onClick={() => setMenuOpened(!menuOpened)}>
          <div id="openMenuTop"></div>
          <div id="openMenuMiddle"></div>
          <div id="openMenuBottom"></div>
        </button>
      )}
      <button
        id="prevBtn"
        onClick={() => {
          setPage(page - 1);
          setActive(null);
        }}
      >
        <div id="leftArrowTop"></div>
        <div id="leftArrowMiddle"></div>
        <div id="leftArrowBottom"></div>
      </button>
      <button
        id="todayBtn"
        onClick={() => {
          if (page !== 0) {
            setActive(null);
          }
          setPage(0);
        }}
      >
        {moment().format("DD")}
      </button>
      <button
        id="nextBtn"
        onClick={() => {
          setPage(page + 1);
          setActive(null);
        }}
      >
        <div id="rightArrowTop"></div>
        <div id="rightArrowMiddle"></div>
        <div id="rightArrowBottom"></div>
      </button>
    </nav>
  );
};

export default Navbar;
