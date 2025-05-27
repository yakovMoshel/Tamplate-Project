export const getCryptos = async () => {
  try {
    const res = await fetch("http://localhost:5000/")
    if (!res.ok) {
      throw new Response('Invalid request', {
        status: 400,
        statusText: 'Bad Request',
      });
    }
    return res.json();
  }
  catch (error) {
    console.error('Error fetching cryptocurrencies:', error);
    throw error;
  }
};

