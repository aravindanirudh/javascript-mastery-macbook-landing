import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductViewer from './components/ProductViewer'
import gsap from 'gsap'
import { ScrollTrigger} from 'gsap/ScrollTrigger' // ScrollTrigger allows us to trigger animations based on the scroll position, while SplitText helps in splitting text into individual characters, words, or lines for more granular animation control

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App