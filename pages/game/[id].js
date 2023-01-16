import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import H1 from '../../components/h1'
import Characters from '../../components/common/characters'
import GameTop from '../../components/game-top'
import GameSymbol from '../../components/game-symbol'
import Gallery from '../../components/common/gallery'
import TRANSLATE from '../../helpers/translate.json'
import config from '../../config'
import Builder from '../../DAL'
export default function SingleGame({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
        status === 'ok' ? 
        <>
          <H1 h1={data.body.h1} />
          <GameTop data={data.body} />
          <Characters data={data.body.characteristics} adapter="commaSeparation" title={TRANSLATE.GAME_CHARACTERISTICS[config.LANG]} />
          <Content text={data.body.content} />
          <GameSymbol data={data.body.symbols} title={TRANSLATE.SYMBOL_GAME[config.LANG]} />
          <Gallery data={data.body.gallery} title={TRANSLATE.SCREENSHOTS[config.LANG]} />
        </>
      :null
      }
    </MainLayout>
  )
}
SingleGame.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('game')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}