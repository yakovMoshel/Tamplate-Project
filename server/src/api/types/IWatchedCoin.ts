export interface IWatchedCoin  {
  id: string; // לדוגמה 'bitcoin'
  name: string;
  symbol: string;
  image: string;
  addedAt: Date;
  current_price: number;
}