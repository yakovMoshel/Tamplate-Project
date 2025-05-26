export const getCryptos = async () => {
const res = await fetch("http://localhost:5000/")

return res.json();
};

