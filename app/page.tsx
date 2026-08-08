import { HeroSlider } from '@/components/home/hero-slider'
import {
  AboutPreview,
  Achievements,
  ClubStats,
  GuestCta,
  Testimonials,
  UpcomingMeeting,
  WhyJoin,
} from '@/components/home/sections'

export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <AboutPreview />
      <WhyJoin />
      <Achievements />
      <UpcomingMeeting />
      <ClubStats />
      <Testimonials />
      <GuestCta />
    </>
  )
}
