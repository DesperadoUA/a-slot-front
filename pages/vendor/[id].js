import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import Builder from '../../DAL'
export default function SingleVendor({status, data}) {
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
SingleVendor.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('vendor')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}