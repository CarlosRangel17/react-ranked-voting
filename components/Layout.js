import Head from 'next/head'
import Navbar from './Navbar'
import styles from './Layout.module.css'

const Layout = (props) => (
    <div className={styles.Layout}>
        <Head>
            <title>React Ranked Voting</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous" />
        </Head>
        {props.shownavbar && ( <Navbar />)}
        <main className={styles.Layout_main}>
            {props.children}
        </main>
        <style jsx global>{`
            body {
                margin: 0;
                padding: 0;
                font-size: 18px;
                font-weight: 400;
                line-height: 1.8;
                color: #333;
                font-family: sans-serif;
            }
        `}</style>
    </div>
);

export default Layout;