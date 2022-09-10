import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import BonusCharacters from '../../components/bonus-characters'
import H1 from '../../components/h1'
import Builder from '../../DAL'

export default function SingleBonus({status, data}) {
    return (
        <MainLayout meta={data.body} status={status}>
           {
            status === 'ok' ? 
            <>
            <H1 h1={data.body.h1} />
            <BonusCharacters data={data.body.characters} />
            <Content text={data.body.content} />
            </>
          :null
          }
        </MainLayout>
    )
}
SingleBonus.getInitialProps = async ({req, res, query}) => {
  const DAL = new Builder()
  const response = await DAL.setPostType('bonus')
                            .setUrlId(query.id)
                            .setAction('get')
                            .get()
  if(res) res.statusCode = response.status !== 'ok' ? 404 : 200
  return response
}