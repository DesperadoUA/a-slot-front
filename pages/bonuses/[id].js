import { MainLayout } from '../../layouts/Main'
import H1 from '../../components/h1'
import Content from '../../components/content'
import Faq from '../../components/faq'
import BonusLoop from '../../components/bonus-loop'
import Builder from '../../DAL'

export default function IndexBonus({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
      {
            status === 'ok' ? 
            <>
            <H1 h1={data.body.h1} />
            <BonusLoop posts={data.body.posts} />
            <Content text={data.body.content} />
            <Faq posts={data.body.faq} />
            </>
            : null
       }
    </MainLayout>
  )
}
IndexBonus.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('bonuses')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}
