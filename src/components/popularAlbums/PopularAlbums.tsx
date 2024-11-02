import getSpotifyAccessToken from "@/actions/getAccessToken";
import Image from "next/image";
import PopularAlbum, { TAlbum } from "./PopularAlbum";

const getPopularAlbums = async () => {
  const token = await getSpotifyAccessToken();
  const albumsIds = [
    "0upenH0uUT36nBbVM5mQhW",
    "5xOkxpVDHdpWkI9mNfYXab",
    "6arzq3H2uuaYsfBBe2BYC3",
    "013jUXOfDFXnDMBetTdsiH",
    "446ROKmKfpEwkbi2SjELVX",
    "15XcLhiVMlSOipUddTNDnr",
    "7aJuG4TFXa2hmE4z1yxc3n",
    "0Rkv5iqjF2uenfL0OVB8hg",
    "2Lxoc72vRTGdQfMvj7Ovi1",
    "3vDIjYB1eatEoGlVoZWUFs",
    "2ODvWsOgouMbaA5xf0RkJe",
  ].join(",");

  const res = await fetch(
    `${process.env.SPOTIFY_BASE_URL}/albums?ids=${albumsIds}`,
    {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const PopularAlbums = async () => {
  const popularAlbums = await getPopularAlbums();
  return (
    <div className="mt-10">
      <h3 className="text-xl font-semibold text-white">Popular Albums</h3>
      <div className="grid grid-cols-6 gap-y-6 mt-3">
        {popularAlbums?.albums?.slice(0, 6).map((album: TAlbum) => (
          <PopularAlbum key={album.id} album={album} />
        ))}
      </div>
    </div>
  );
};

export default PopularAlbums;
