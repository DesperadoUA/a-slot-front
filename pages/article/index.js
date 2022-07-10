import { MainLayout } from '../../layouts/Main'
import Content from '../../components/content'
import data from '../../data'

export default function IndexArticle() {
  const meta = {
    title: 'Title article Page',
    description: 'Description article page'
  }
  return (
    <MainLayout meta={meta}>
      <Content text={data.text} />
    </MainLayout>
  )
}
