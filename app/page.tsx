// import Header from '@/components/header'
// import Hero from '@/components/hero'
// import MenuSection from '@/components/menu-section'
// import ExperienceSection from '@/components/experience-section'
// import GallerySection from '@/components/gallery-section'
// import Footer from '@/components/footer'

// export default function Home() {
//   return (
//     <div className="overflow-hidden">
//       <Header />
//       <Hero />
//       <MenuSection />
//       <ExperienceSection />
//       <GallerySection />
//       <Footer />
//     </div>
//   )
// }


// import Header from '@/components/header'
// import Hero from '@/components/hero'
// import MenuSection from '@/components/menu-section'
// import ExperienceSection from '@/components/experience-section'
// import GallerySection from '@/components/gallery-section'
// import Footer from '@/components/footer'
// import ScrollFrameBackground from '@/components/scroll-frame-background'

// export default function Home() {
//   return (
//     <div className="relative isolate overflow-hidden bg-black">
//       <ScrollFrameBackground />

//       <div className="relative z-10">
//         <Header />
//         <Hero />
//         <MenuSection />
//         <ExperienceSection />
//         <GallerySection />
//         <Footer />
//       </div>
//     </div>
//   )
// }


import Header from '@/components/header'
import Hero from '@/components/hero'
import MenuSection from '@/components/menu-section'
import ExperienceSection from '@/components/experience-section'
import GallerySection from '@/components/gallery-section'
import Footer from '@/components/footer'
import ScrollFrameBackground from '@/components/scroll-frame-background'
import SmoothScroll from '@/components/smooth-scroll'
import ReserveTable from '@/components/reserve-table'


export default function Home() {
  return (
    <SmoothScroll>
      <div className="relative isolate overflow-hidden bg-black">
        <ScrollFrameBackground />

        <div className="relative z-10">
          <Header />
          <Hero />
          <MenuSection />
          <ExperienceSection />
          <ReserveTable />
          <GallerySection />
          <Footer />
        </div>
      </div>
    </SmoothScroll>
  )
}
