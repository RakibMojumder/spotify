import { FaSpotify } from "react-icons/fa6";
import { GoHome } from "react-icons/go";
import SearchBox from "./SearchBox";

const Navbar = () => {
  return (
    <div className="h-[65px] flex items-center justify-between py-2">
      <FaSpotify size={25} />
      <div className="flex items-center gap-x-2 h-full">
        <button className="size-12 bg-secondary rounded-full text-white flex justify-center items-center">
          <GoHome size={25} />
        </button>
        <SearchBox />
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
