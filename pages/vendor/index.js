import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import data from '../../data'

export default function IndexVendor() {
  const meta = {
    title: 'Title vendor Page',
    description: 'Description vendor page'
  }
  return (
    <MainLayout meta={meta}>
      <div style={{height: "100px"}}>
        <h1>Index Vendor</h1>
      </div>
      <Content text={data.text} />
    </MainLayout>
  )
}
