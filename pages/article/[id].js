import { MainLayout } from '../../layouts/Main'
import {useRouter} from 'next/router'
import Content from '../../components/content'
import data from '../../data'

export default function SingleArticle() {
    const router = useRouter()
    const meta = {
        title: 'Title article single Page',
        description: 'Description article single page'
      }
    return (
        <MainLayout meta={meta}>
          <div style={{height: "100px"}}>
          <h1>Single Article {router.query.id}</h1>
          </div>
          <Content text={data.text} />
        </MainLayout>
    )
}