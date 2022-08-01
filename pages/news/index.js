import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import Faq from '../../components/faq'
import Builder from '../../DAL'

export default function IndexArticle({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
            status === 'ok' ? 
            <>
            <Content text={data.body.content} />
            <Faq posts={data.body.faq} />
            </>
            : null
       }
    </MainLayout>
  )
}
IndexArticle.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('news')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}
