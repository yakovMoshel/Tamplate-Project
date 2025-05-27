export const getWatchlist = async () => {
  try {
    const res = await fetch('http://localhost:5000/api/watchlist')

    if (!res.ok) {
      console.error("Failed to fetch watchlist:", res.statusText);
      return [];
    }
    const data = await res.json();
    return data;

  }
  catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    throw error;
  }
}
