import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import H1 from '../../components/h1'
import Faq from '../../components/faq'
import NewsLoop from '../../components/news-loop'
import Builder from '../../DAL'

export default function IndexArticle({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
            status === 'ok' ? 
            <>
            <H1 h1={data.body.h1} />
            <NewsLoop posts={data.body.news}/>
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
