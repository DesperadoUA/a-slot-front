import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import Builder from '../../DAL'
import ErrorPage from './../404'

export default function IndexBetting({status, data}) {
  if(status !== 'ok') return <ErrorPage />
  const meta = {
    title: data.body.meta_title,
    description: data.body.description
  }
  return (
    <MainLayout meta={meta}>
      <div style={{height: "100px"}}>
        <h1>Index Betting</h1>
      </div>
      <Content text={data.body.content} />
    </MainLayout>
  )
}
IndexBetting.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('betting')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}