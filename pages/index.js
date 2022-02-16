import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout 
      pageTitle="Home"
      description="This is an amazing landing page"
      header={<Header />}
    >
      <About />
      <Contact />
    </Layout>
  )
}
