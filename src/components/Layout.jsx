import { createContext, useState, useEffect } from "react";
import { ReadAll } from "libs/ddbApi";
import "styles/layout.scss";
import AddBtn from "./AddBtn";
import AddItem from "./AddItem";
import Calendar from "./Calendar";
import Navbar from "./Navbar";
import ShieldLayer from "./ShieldLayer";
import SideMenu from "./SideMenu";
import ItemDetail from "./ItemDetail";

export const AppContext = createContext({});

export const Layout = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [addItemOpened, setAddItemOpened] = useState(false);
  const [itemDetail, setItemDetail] = useState(false);
  const [page, setPage] = useState(0);
  const [active, setActive] = useState(null);
  const [data, setData] = useState([]);

  const fetch = async () => {
    try {
      const item = await ReadAll();
      console.log("fetch succeed");
      console.log(item.Items);
      setData(item.Items);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <section id="layout">
      <AppContext.Provider
        value={{
          menuOpened,
          setMenuOpened,
          addItemOpened,
          setAddItemOpened,
          itemDetail,
          setItemDetail,
          page,
          setPage,
          active,
          setActive,
          data,
          setData,
          fetch,
        }}
      >
        <SideMenu />
        <AddItem />
        <ItemDetail />
        <main
          className={`${menuOpened ? "op05-ts02" : ""} ${
            addItemOpened || itemDetail ? "op05-ts03" : ""
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
