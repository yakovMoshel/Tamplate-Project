import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './components/templates/main-layout';
import ErrorPage from './pages/errorPage';
import { loader as cryptoDashboardLoader } from './pages/HomePage';
import CryptoDetail, { loader as cryptoDetailLoader } from './components/molecules/CryptoDetail';
import HomePage from './pages/HomePage';
import WatchlistPage , { loader as watchlistLoader }  from './pages/WatchlistPage';

const router = createBrowserRouter([{
  path: '/',
  element: <MainLayout />,
  errorElement: <ErrorPage />,
  children: [
    {
      path: '/',
      element: <HomePage />,
      loader: cryptoDashboardLoader,
      shouldRevalidate: () => false,
    },
    {
      path: '/coin/:id',
      element: <CryptoDetail />,
      loader: cryptoDetailLoader

    },
    {
      path: '/watchlist',
      element: <WatchlistPage />,
      loader : watchlistLoader,
      shouldRevalidate: () => false,
    }
  ]
}
])

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
