import { MainLayout } from '../../layouts/Main'
import GameLoop from '../../components/game-loop'
import Content from '../../components/content'
import Builder from '../../DAL'
import ErrorPage from './../404'

export default function IndexGame({status, data}) {
  if(status !== 'ok') return <ErrorPage />
  const meta = {
    title: data.body.meta_title,
    description: data.body.description
  }
  return (
    <MainLayout meta={meta}>
      <GameLoop />
      <Content text={data.body.content} />
    </MainLayout>
  )
}
IndexGame.getInitialProps = async ({req, res}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('pages')
                            .setUrlId('game')
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}