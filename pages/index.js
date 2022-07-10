import { MainLayout } from '../layouts/Main'
import CasinoLoop from '../components/casino-loop'
import Content from '../components/content'
import Faq from '../components/faq'
import Builder from '../DAL'
import ErrorPage from './404'

export default function Home({status, data}) {
  if(status !== 'ok') return <ErrorPage />
  const meta = {
    title: data.body.meta_title,
    description: data.body.description
  }
  return (
    <MainLayout meta={meta}>
      <CasinoLoop posts={data.body.casino}/>
      <Content text={data.body.content} />
      <Faq posts={data.body.faq} />
    </MainLayout>
  )
}
Home.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('main')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}