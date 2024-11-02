import getSpotifyAccessToken from "@/actions/getAccessToken";
import PopularArtist, { TArtist } from "./PopularArtist";

const getPopularArtists = async () => {
  const token = await getSpotifyAccessToken();
  const artistsIds = [
    "1wRPtKGflJrBx9BmLsSwlU",
    "4YRxDV8wJFPHPTeXepOstw",
    "2oSONSC9zQ4UonDKnLqksx",
    "4gdMJYnopf2nEUcanAwstx",
    "2GoeZ0qOTt6kjsWW4eA6LS",
    "5wJ1H6ud777odtZl5gG507",
    "1Xyo4u8uXC1ZmMpatF05PJ",
    "4OUraoZcwg1SsMHFjuaajw",
    "3DeHMjvYP73Pycy8va8RKY",
    "6Mv8GjQa7LKUGCAqa9qqdb",
    "06eRdiCBgFUhiuFjei0eH2",
    "05etL4pzWd6TSv1x5WrlG3",
  ].join(",");

  const res = await fetch(
    `${process.env.SPOTIFY_BASE_URL}/artists?ids=${artistsIds}`,
    {
      headers: {
        Authorization: `${token.token_type} ${token.access_token}`,
      },
    }
  );
  const data = await res.json();
  return data;
};

const PopularArtists = async () => {
  const popularArtists = await getPopularArtists();

  return (
    <div>
      <h3 className="text-xl font-semibold text-white">Popular Artist</h3>
      <div className="grid grid-cols-6 gap-y-6 mt-3">
        {popularArtists.artists.slice(0, 6).map((artist: TArtist) => (
          <PopularArtist key={artist.id} artist={artist} />
        ))}
      </div>
    </div>
  );
};

export default PopularArtists;
