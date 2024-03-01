import logo from "../../assets/logo.png";
import Button from "../Button";
import MenuDesktop from "../header/MenuDesktop";
import MenuMobile from "../header/MenuMobile";

const Navbar = () => {
  return (
    <div className="relative w-full border-b shadow-lg border-b-primary">
      <div className="flex items-center justify-between w-full px-8 py-8 sm:px-8 md:px-18 lg:px-32">
        <div className="z-50 flex items-center gap-3 cursor-pointer select-none">
          <img src={logo} alt="logo" className="w-10" />
          <span className="text-lg font-bold font-bungee lg:text-xl xl:text-3xl">
            P-Burger
          </span>
        </div>
        <div className="hidden gap-5 md:flex">
          <MenuDesktop />
        </div>
        <div className="items-center hidden gap-3 md:flex">
          <Button title="Entrar" style="primary" />
          <a href="#" className="text-[14px] text-primary underline">
            Cadastre-se
          </a>
        </div>

        <div className="z-20 block md:hidden">
          <MenuMobile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
