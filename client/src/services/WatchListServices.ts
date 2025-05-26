export const getWatchlist = async ()  => {
    const res = await fetch('http://localhost:5000/api/watchlist')

  if (!res.ok) {
    console.error("Failed to fetch watchlist:", res.statusText);
    return [];
  }
  const data = await res.json();
  return data;
}
