import Header from '../components/global/Header'
import MainContent from '../components/MainContent'
import Footer from '../components/global/Footer'
import ScrollTopButton from '../components/global/ScrollTopButton'
import MetaTags from '../hooks/meta'

function Home() {
    return (
      <>
      <MetaTags 
          title="Manali Bhavsar" 
          description="Portfolio showcasing projects, skills, and experience." />
        <Header />
        <MainContent />
        <Footer />
        <ScrollTopButton />
      </>
    )
}

export default Home
