import { TImage } from "@/type";
import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";

export type TArtist = {
  id: string;
  images: Array<TImage>;
  name: string;
  type: string;
};

export type TPopularArtist = {
  artist: TArtist;
};

const PopularArtist = ({ artist }: TPopularArtist) => {
  return (
    <div className="p-3 cursor-pointer rounded-md hover:bg-secondary duration-200 relative group">
      <Image
        alt="artist image"
        src={artist.images[0].url}
        width={artist.images[0].width}
        height={artist.images[0].height}
        className="size-36 rounded-full object-cover"
      />
      <h1 className="text-white mt-3">{artist.name}</h1>
      <p className="text-neutral-500 capitalize text-sm">{artist.type}</p>
      <div className="size-[50px] rounded-full bg-accent flex justify-center items-center absolute top-[45%] right-3 opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <IoPlaySharp size={28} className="text-black" />
      </div>
    </div>
  );
};

export default PopularArtist;
