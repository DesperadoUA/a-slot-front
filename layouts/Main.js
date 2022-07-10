import Head from '../components/head'
import Footer from '../components/footer'
import Header from '../components/header'
export function MainLayout({children, meta}) {
    return (
        <>
        <Head meta={meta} />
        <Header />
            <main>
                {children}
            </main>
        <Footer />
        </>
    )
}