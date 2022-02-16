import Head from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ pageTitle, description, header, children }) {
    return (
        <>
            <Head>
                <meta name="description" content={description} />
                <meta name="keywords" content="Landing page, company" />
                <meta name="author" content="Company name" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>{pageTitle}</title>
            </Head>

            <header>
                <Navbar />
                {header}
            </header>

            {children}

            <Footer />
        </>
    );
}

export default Layout;