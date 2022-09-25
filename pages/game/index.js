import { MainLayout } from '../../layouts/Main'
import GameLoop from '../../components/game-loop'
import Content from '../../components/content'
import Faq from '../../components/faq'
import H1 from '../../components/h1'
import Builder from '../../DAL'

export default function IndexGame({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
      {
            status === 'ok' ? 
            <>
            <H1 h1={data.body.h1} />
            <GameLoop posts={data.body.games} />
            <Content text={data.body.content} />
            <Faq posts={data.body.faq} />
            </>
            : null
       }
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