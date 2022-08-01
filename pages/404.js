import { MainLayout } from '../layouts/Main'
import ErrorComponent from '../components/404'

export default function ErrorPage() {
  return (
    <MainLayout meta={{}} status={'error'}>
          <ErrorComponent />
    </MainLayout>
  )
}
