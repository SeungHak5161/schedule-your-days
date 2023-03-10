import { useState } from "react";
import "styles/layout.scss";
import AddBtn from "./AddBtn";
import AddItem from "./AddItem";
import Calendar from "./Calendar";
import Navbar from "./Navbar";
import ShieldLayer from "./ShieldLayer";
import SideMenu from "./SideMenu";
export const Layout = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [bottomOpened, setBottomOpened] = useState(false);
  return (
    <section id="layout">
      <SideMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <AddItem bottomOpened={bottomOpened} setBottomOpened={setBottomOpened} />
      <main
        className={`${menuOpened ? "op05-ts02" : ""} ${
          bottomOpened ? "op05-ts03" : ""
        }`}
      >
        <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <Calendar />
        <AddBtn setBottomOpened={setBottomOpened} />
        <ShieldLayer
          menuOpened={menuOpened}
          setMenuOpened={setMenuOpened}
          bottomOpened={bottomOpened}
          setBottomOpened={setBottomOpened}
        />
      </main>
    </section>
  );
};
export default Layout;
