import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import data from '../../data'
import {useRouter} from 'next/router'
export default function SingleVendor() {
    const router = useRouter()
    const meta = {
        title: 'Title vendor single Page',
        description: 'Description vendor single page'
      }
    return (
        <MainLayout meta={meta}>
          <div style={{height: "100px"}}>
          <h1>Single Vendor {router.query.id}</h1>
          </div>
          <Content text={data.text} />
        </MainLayout>
    )
}