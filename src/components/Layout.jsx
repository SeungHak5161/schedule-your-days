import { useState } from "react";
import "styles/layout.scss";
import AddBtn from "./AddBtn";
import Calendar from "./Calendar";
import Navbar from "./Navbar";
import SideMenu from "./SideMenu";
export const Layout = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <section id="layout">
      <SideMenu menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
      <main className={menuOpened ? "opacity05" : null}>
        <Navbar menuOpened={menuOpened} setMenuOpened={setMenuOpened} />
        <Calendar />
      </main>
      <AddBtn />
    </section>
  );
};
export default Layout;
