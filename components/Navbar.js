import Link from 'next/link'
import styles from './Navbar.module.css'

const Navbar = () => (
        
    <div className={styles.Navbar}>
        <navbar>
            <Link href="/"><a>Home</a></Link>
            <Link href="/about"><a>About</a></Link>
        </navbar>
    </div>
)

export default Navbar