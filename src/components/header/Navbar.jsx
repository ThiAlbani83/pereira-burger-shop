import logo from "../../assets/logo.png";
import MenuDesktop from "../header/MenuDesktop";
import MenuMobile from "../header/MenuMobile";

const Navbar = () => {

  

  return (
    <div className="relative w-full border-b shadow-sm border-b-red-200">
      <div className="flex items-center justify-between w-full p-8 sm:px-16 md:px-24 lg:px-32">
        <div className="z-50 flex items-center gap-3 cursor-pointer select-none">
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-lg font-bold text-red-600 font-bungee lg:text-xl xl:text-3xl">
            P-Burger
          </span>
        </div>
        <div className="hidden md:block">
          <MenuDesktop />
        </div>
        <div className="z-20 block md:hidden">
          <MenuMobile/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
