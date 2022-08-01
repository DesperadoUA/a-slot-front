import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import Builder from '../../DAL'
export default function SinglePoker({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
        status === 'ok' ? 
        <Content text={data.body.content} />
      :null
      }
    </MainLayout>
  )
}
SinglePoker.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('poker')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}