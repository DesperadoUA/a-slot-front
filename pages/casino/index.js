import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import CasinoLoop from '../../components/casino-loop'
import Faq from '../../components/faq'
import Builder from '../../DAL'

export default function IndexCasino({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
            status === 'ok' ? 
            <>
            <CasinoLoop posts={data.body.casino}/>
            <Content text={data.body.content} />
            <Faq posts={data.body.faq} />
            </>
            : null
       }
    </MainLayout>
  )
}
IndexCasino.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('casino')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}