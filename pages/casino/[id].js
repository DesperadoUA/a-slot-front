import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import CasinoTop from '../../components/casino-top'
import Faq from '../../components/faq'
import CasinoCharacters from '../../components/casino-characters'
import Builder from '../../DAL'
import ErrorPage from './../404'
export default function SingleCasino({status, data}) {
  if(status !== 'ok') return <ErrorPage />
  const meta = {
    title: data.body.meta_title,
    description: data.body.description
  }
    return (
        <MainLayout meta={meta}>
          <CasinoTop data={data.body} />
          <CasinoCharacters data={data.body} />
          <Content text={data.body.content} />
          <Faq posts={data.body.faq} />
        </MainLayout>
    )
}
SingleCasino.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('casino')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}