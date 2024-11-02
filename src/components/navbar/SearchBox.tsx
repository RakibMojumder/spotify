import { FiSearch } from "react-icons/fi";
import { LiaBoxOpenSolid } from "react-icons/lia";

const SearchBox = () => {
  return (
    <div className="h-full w-[480px] bg-secondary flex items-center rounded-full py-3">
      <div className="h-full w-20 flex justify-center items-center rounded-l-full">
        <FiSearch size={25} className="text-white" />
      </div>
      <input
        type="text"
        placeholder="What do you want to play?"
        className="bg-transparent h-full w-full text-white placeholder:text-neutral-400 focus:outline-none"
      />
      <div className="h-full w-20 flex justify-center items-center rounded-r-full border-l border-neutral-400 cursor-pointer">
        <LiaBoxOpenSolid size={30} className="text-white" />
      </div>
    </div>
  );
};

export default SearchBox;
