import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import H1 from '../../components/h1'
import VendorTop from '../../components/vendor-top'
import Characters from '../../components/common/characters'
import GameLoop from '../../components/game-loop'
import Builder from '../../DAL'
import config from '../../config'
import TRANSLATE from '../../helpers/translate.json'
export default function SingleVendor({status, data}) {
  return (
    <MainLayout meta={data.body} status={status}>
       {
        status === 'ok' ? 
        <>
        <H1 h1={data.body.h1} />
        <VendorTop data={data.body} />
        <Characters data={data.body.characteristics} adapter="commaSeparation" title={TRANSLATE.VENDOR_CHARACTERISTICS[config.LANG]} />
        <Content text={data.body.content} />
        <GameLoop posts={data.body.games} title={TRANSLATE['VENDOR_GAMES'][config.LANG]} cssClass="mt-0" />
        </>
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