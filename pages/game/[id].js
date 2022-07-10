import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import data from '../../data'
import {useRouter} from 'next/router'
export default function SingleGame() {
    const router = useRouter()
    const meta = {
        title: 'Title game single Page',
        description: 'Description game single page'
      }
    return (
        <MainLayout meta={meta}>
          <div style={{height: "100px"}}>
          <h1>Single Game {router.query.id}</h1>
          </div>
          <Content text={data.text} />
        </MainLayout>
    )
}