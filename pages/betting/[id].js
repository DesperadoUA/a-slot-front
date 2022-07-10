import { MainLayout } from '../../layouts/Main'
import {useRouter} from 'next/router'
import Content from '../../components/content'
import data from '../../data'

export default function SingleBetting() {
    const router = useRouter()
    const meta = {
        title: 'Title betting single Page',
        description: 'Description betting single page'
      }
    return (
        <MainLayout meta={meta}>
          <div style={{height: "100px"}}>
          <h1>Single Betting {router.query.id}</h1>
          </div>
          <Content text={data.text} />
        </MainLayout>
    )
}