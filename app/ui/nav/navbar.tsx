import Image from "next/image";
import NavButtons from "./navButtons";
import NavLinks from "./navLinks";
import logo from "../../../public/img/logo.png"

export default function NavBar() {
  return (
    <div className="flex gap-[10px] items-center space mt-[5px] justify-between mx-[10%] ">
        <div><Image src={logo} alt="" width={103} height={58} /></div>
      <div className="flex gap-[20px]">
      <NavLinks />
      <NavButtons />
      </div>
    </div>
  );
}
