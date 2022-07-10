import Head from 'next/head'

export default function CustomHead({meta}) {
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="description" content={meta.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  )
}
