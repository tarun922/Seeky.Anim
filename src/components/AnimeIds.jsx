import { useEffect, useState } from "react";

export default function AnimeIds() {
  const [anime, setAnime] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("/Seeky.anime.json")
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json();
      })
      .then((data) => {
        setAnime(Array.isArray(data) ? data : []);
      })
      .catch((err) => setError(err.message));
  }, []);

  if (error) return <p style={{ color: "red" }}>{error}</p>;

  return (
    <main style={{ padding: 20, color: "white" }}>
      <h1>Anime Catalogue</h1>
      <p>Total records: {anime.length}</p>
      {anime.slice(0, 20).map((item, index) => (
        <div key={item.anilist_id ?? index}>
          {item.title ?? item.title_english ?? "Unknown"} —{" "}
          {item.anilist_id ?? "No ID"}
        </div>
      ))}
    </main>
  );
}
