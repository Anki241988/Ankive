import HeroPage from "./HeroPage"
import BusinessCarousel from "./BuisnessCarousel"


function Hero() {
  return (
    <>

<section
  id="Hero"
  className="mx-auto flex w-full max-w-[1600px] flex-col items-start gap-8 px-4 pt-2 pb-8 md:px-8 xl:flex-row xl:gap-10 xl:px-12 xl:pt-4 xl:pb-10"
>
  <div id="leftSection" className="w-full min-w-0 xl:w-1/2">
    <HeroPage />
  </div>

  <div id="rightSection" className="w-full min-w-0 xl:w-1/2">
    <BusinessCarousel />
  </div>
</section>

</>
  )
}
export default Hero