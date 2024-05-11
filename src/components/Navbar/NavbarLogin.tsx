/* eslint-disable react/react-in-jsx-scope */
import Learning from "./Learning";
import Wishlist from "./Wishlist";
import Notification from "./Notification";
import Username from "./Username";
const NavbarLogin = () => {
  return (
    <div className="flex items-center gap-x-6">
      <Learning />
      <Wishlist />
      {/* <Notification /> */}
      <Username />
    </div>
  );
};

export default NavbarLogin;
