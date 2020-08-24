import Layout from '../components/Layout'
import Signin from '../components/Signin'
import ReactLogo from '../assets/logo.svg';

const Index = () => (
    <Layout shownavbar={false}>
        <div>
            <Signin />
        </div>
    </Layout>
)

export default Index