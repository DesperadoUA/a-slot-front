import { MainLayout } from '../layouts/Main'
import Link from 'next/link'

export default function ErrorPage() {
  const meta = {
    title: 'Error Page not found',
    description: 'Description main page'
  }
  return (
    <MainLayout meta={meta}>
      <div className="container">
        <div>404 page. 
            <Link href="/">
                <a>Go home</a>
            </Link>
        </div>
      </div>
    </MainLayout>
  )
}
