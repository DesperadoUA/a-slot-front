import Link from 'next/link'
export default function ErrorComponent() {
    return (
        <div className="container">
            <div>404 page. 
                <Link href="/">
                    <a>Go home</a>
                </Link>
            </div>
          </div>
    )
  }