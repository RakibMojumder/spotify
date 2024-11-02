import { TImage } from "@/type";
import { TArtist } from "../popularArtists/PopularArtist";
import Image from "next/image";
import { IoPlaySharp } from "react-icons/io5";

export type TAlbum = {
  id: string;
  images: Array<TImage>;
  name: string;
  artists: Array<TArtist>;
};

type TAlbumProps = {
  album: TAlbum;
};

const PopularAlbum = ({ album }: TAlbumProps) => {
  return (
    <div className="p-3 cursor-pointer rounded-md hover:bg-secondary duration-200 relative group">
      <Image
        alt="artist image"
        src={album?.images[0].url}
        width={album?.images[0].width}
        height={album?.images[0].height}
        className="object-cover"
      />
      <h1 className="text-white mt-3">{album?.name}</h1>
      <p className="text-neutral-500 capitalize text-sm">
        {album?.artists?.map((artist) => artist?.name).join(",")}
      </p>
      <div className="size-[50px] rounded-full bg-accent flex justify-center items-center absolute top-[45%] right-3 opacity-0 translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
        <IoPlaySharp size={28} className="text-black" />
      </div>
    </div>
  );
};

export default PopularAlbum;
