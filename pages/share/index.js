import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import Faq from '../../components/faq'
import H1 from '../../components/h1'
import Builder from '../../DAL'

export default function IndexShare({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
      {
            status === 'ok' ? 
            <>
            <H1 h1={data.body.h1} />
            <Content text={data.body.content} />
            <Faq posts={data.body.faq} />
            </>
            : null
       }
    </MainLayout>
  )
}
IndexShare.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('share')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}