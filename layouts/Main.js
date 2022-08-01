import Head from '../components/head'
import Footer from '../components/footer'
import Header from '../components/header'
import Description from '../components/description'
import Helper from '../helpers'
import ErrorComponent from '../components/404'
export function MainLayout({children, meta, status}) {
    const metaData = status === 'ok' ? Helper.metaData(meta) : Helper.errorMetaData()
    return (
        <>
        <Head meta={metaData} />
        <Header />
            <main>
                {
                    status === 'ok' ? children : <ErrorComponent />
                }
            </main>
        <Description />
        <Footer />
        </>
    )
}