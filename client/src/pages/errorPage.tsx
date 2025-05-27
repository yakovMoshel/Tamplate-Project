import { useRouteError, isRouteErrorResponse } from 'react-router-dom';
import Header from '../components/molecules/Header';
import styles from '../styles/ErrorPage.module.css';
import { JSX } from 'react';

/**
 * ErrorPage component displays an appropriate error message 
 * based on the type and status of the routing error.
 *
 * Handles:
 * - 404 errors (Page Not Found)
 * - 500 errors (Internal Server Error)
 * - Generic route errors via isRouteErrorResponse
 * - General JavaScript errors (e.g., thrown in loaders/actions)
 *
 * @returns {JSX.Element} The rendered error page with a title and message.
 */
export default function ErrorPage(): JSX.Element {
  const error = useRouteError();

  let title = 'An error occurred';
  let message = 'Something went wrong.';

  // Handle route-specific errors like 404, 500, etc.
  if (isRouteErrorResponse(error)) {
    if (error.status === 404) {
      title = '404 - Page Not Found';
      message = 'The page you are looking for does not exist.';
    } else if (error.status === 500) {
      title = '500 - Server Error';
      message = 'An internal server error occurred. Please try again later.';
    } else {
      title = `Error ${error.status}`;
      message = error.statusText || 'Unexpected error occurred.';
    }
  } else if (error instanceof Error) {
    // Handle general thrown errors (from loader/action)
    title = 'Data Loading Error';
    message = error.message || 'There was a problem loading the data.';
  }

  return (
    <>
      <Header />
      <main className={styles.errorPage}>
        <h1>{title}</h1>
        <p>{message}</p>
      </main>
    </>
  );
}
