import { createContext, useState } from "react";
import "styles/layout.scss";
import AddBtn from "./AddBtn";
import AddItem from "./AddItem";
import Calendar from "./Calendar";
import Navbar from "./Navbar";
import ShieldLayer from "./ShieldLayer";
import SideMenu from "./SideMenu";
export const AppContext = createContext({});
export const Layout = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [bottomOpened, setBottomOpened] = useState(false);
  const [page, setPage] = useState(0);
  return (
    <section id="layout">
      <AppContext.Provider
        value={{
          menuOpened,
          setMenuOpened,
          bottomOpened,
          setBottomOpened,
          page,
          setPage,
        }}
      >
        <SideMenu />
        <AddItem />
        <main
          className={`${menuOpened ? "op05-ts02" : ""} ${
            bottomOpened ? "op05-ts03" : ""
          }`}
        >
          <Navbar />
          <Calendar />
          <AddBtn />
          <ShieldLayer />
        </main>
      </AppContext.Provider>
    </section>
  );
};
export default Layout;
