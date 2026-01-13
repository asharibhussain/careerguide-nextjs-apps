

import { useEffect, useState } from 'react';
import Head from 'next/head';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Layout from "../shared/layout/layout";

function MyApp({ Component, pageProps }) {
    const [isClient, setIsClient] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setLoading] = useState(true); // State to manage loading state

    useEffect(() => {
        setIsClient(true);

        // Optional: Simulate a delay for demonstration purposes
        const timeout = setTimeout(() => {
            setLoading(false); // Set loading to false after timeout
        }, 2000); // Adjust timeout as needed or remove for real use

        // Optional: Set up global error handler
        const onError = (errorEvent) => {
            setError(errorEvent.error);
            // You can log the error or send it to an error tracking service
            console.error('Unhandled error occurred:', errorEvent.error);
        };
        window.addEventListener('error', onError);

        return () => {
            window.removeEventListener('error', onError);
            clearTimeout(timeout); // Clean up timeout on unmount
        };
    }, []);

    // Handle server-side rendering by skipping initial loading state
    if (!isClient) {
        return null;
    }

    if (error) {
        // Optional: You can render an error UI here
        return (
            <div>
                <Head>
                    <title>Error</title>
                </Head>
                <p>Something went wrong. Please try again later.</p>
                <pre>{error.message}</pre>
            </div>
        );
    }

    return (
        <>
            <Head>
                <title>Career Guide</title>
                <meta name="description" content="Career Guide app description" />
                {/* Add any other meta tags you need */}
            </Head>
            <Layout>
                {isLoading ? (
                    <div id="preloader">Loading...</div>
                ) : (
                    <Component {...pageProps} />
                )}
                
            </Layout>
        </>
    );
}

export default MyApp;

