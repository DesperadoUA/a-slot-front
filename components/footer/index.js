import footer from './style.module.css'
export default function Footer() {
    return (
        <footer className={footer.footer}>
            <div className='container'>
                <div className={footer.text}>
                    A-slots
                </div>
            </div>
        </footer>
    )
  }