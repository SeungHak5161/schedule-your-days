export const ShieldLayer = ({
  menuOpened,
  setMenuOpened,
  bottomOpened,
  setBottomOpened,
}) => {
  return (
    <div
      id="shieldLayer"
      className={menuOpened || bottomOpened ? "DSblock" : "DSnone"}
      onClick={() => {
        setMenuOpened(false);
        setBottomOpened(false);
      }}
    ></div>
  );
};

export default ShieldLayer;
