import PopularAlbums from "@/components/popularAlbums/PopularAlbums";
import PopularArtists from "@/components/popularArtists/PopularArtists";

export default async function Home() {
  return (
    <div className="p-4 bg-gradient-to-b to-40% from-secondary to-primary">
      <PopularArtists />
      <PopularAlbums />
    </div>
  );
}
