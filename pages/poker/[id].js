import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import data from '../../data'
import {useRouter} from 'next/router'
export default function SinglePoker() {
    const router = useRouter()
    const meta = {
        title: 'Title poker single Page',
        description: 'Description poker single page'
      }
    return (
        <MainLayout meta={meta}>
          <div style={{height: "100px"}}>
          <h1>Single Poker {router.query.id}</h1>
          </div>
          <Content text={data.text} />
        </MainLayout>
    )
}