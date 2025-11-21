import Hero from '../components/Hero'
import IconicBrands from '../components/IconicBrands'
import ChooseCountry from '../components/ChooseCountry'
import ExperienceSection from '../components/ExperienceSection'
import TrendingSection from '../components/TrendingSection'
import LandingVideo from '../components/LandingVideo'

const HomePage = () => {
  return (
    <>
      <LandingVideo />
      <TrendingSection />
      <ExperienceSection />
      <ChooseCountry />
      <IconicBrands />
      <Hero />
    </>
  )
}

export default HomePage