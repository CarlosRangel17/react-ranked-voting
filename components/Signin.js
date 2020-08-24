import styles from './Signin.module.css'
import ReactLogo from '../assets/logo.svg';

const Signin = () => (
        
    <div className={styles.Signin}>
        <div className={styles.Signin_header}>
            <ReactLogo className={styles.Signin_logo} alt="logo"  />
            <h1 className={styles.Signin_title} >Ranked Voting</h1>
            <h3 className={styles.Signin_subtitle} >Login</h3>
            <form className="justify-content-start">
                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="form-group form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary w-100">Submit</button>
            </form>
        </div>
    </div>
)

export default Signin;