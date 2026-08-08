import type { Metadata } from 'next'
import { PageHero } from '@/components/page-hero'
import { NewsletterShelf } from '@/components/newsletter-shelf'
import type { Newsletter } from '@/components/newsletter-flipbook'

export const metadata: Metadata = {
  title: 'Newsletter',
  description:
    'Read the Smedley Gazette — our club newsletter packed with member spotlights, contest recaps, and speaking tips.',
}

const newsletters: Newsletter[] = [
  {
    id: 'spring-2026',
    title: 'The Smedley Gazette — Spring Edition',
    date: 'Spring 2026',
    cover: '/images/newsletter-spring.png',
    blurb:
      'Contest season kicks off, three members complete their Pathways levels, and tips for taming the jitters.',
    pages: [
      {
        kind: 'cover',
        image: '/images/newsletter-spring.png',
        title: 'The Smedley Gazette — Spring Edition',
        date: 'Spring 2026',
      },
      {
        kind: 'article',
        heading: 'A Word from the President',
        paragraphs: [
          'What a season it has been. Our membership has grown by a third, and the energy in Room 204 every Thursday is impossible to miss.',
          'This spring we are focused on one thing: giving every member at least one stretch opportunity, whether that is a first icebreaker or a first time chairing the meeting.',
        ],
        note: 'Growth happens at the edge of comfort — see you Thursday.',
      },
      {
        kind: 'article',
        heading: 'Contest Season Recap',
        paragraphs: [
          'Our club-level International Speech Contest drew nine competitors and a packed room of guests.',
          'Congratulations to Priya Sharma, who advances to the Area contest with her speech "The Quiet Room."',
          'Table Topics honors went to Marcus Bell, whose 90-second answer on "the best advice I never took" had the room in stitches.',
        ],
      },
      {
        kind: 'article',
        heading: 'Beat the Jitters',
        paragraphs: [
          'Nervous is normal. Even seasoned speakers feel the adrenaline — the trick is to reframe it as readiness.',
          'Try this: arrive early, walk the front of the room, and deliver your opening line out loud to the empty chairs. Your body learns the space before the audience arrives.',
        ],
        note: 'Tip contributed by VP Education, Elena Rossi.',
      },
    ],
  },
  {
    id: 'autumn-2025',
    title: 'The Smedley Gazette — Autumn Edition',
    date: 'Autumn 2025',
    cover: '/images/newsletter-autumn.png',
    blurb:
      'Officer installation night, a new mentorship pairing program, and how our Speechcraft grads are doing.',
    pages: [
      {
        kind: 'cover',
        image: '/images/newsletter-autumn.png',
        title: 'The Smedley Gazette — Autumn Edition',
        date: 'Autumn 2025',
      },
      {
        kind: 'article',
        heading: 'New Officers Installed',
        paragraphs: [
          'A heartfelt thank you to our outgoing committee, and a warm welcome to the 2025–26 team.',
          'The installation ceremony was our best-attended event of the year, complete with a candlelit gavel handover and far too much cake.',
        ],
        note: 'See the full officer list on our Leadership page.',
      },
      {
        kind: 'article',
        heading: 'Mentorship, Reimagined',
        paragraphs: [
          'Every new member is now paired with a mentor within their first two weeks.',
          'Mentors help set goals, review speech projects, and offer a friendly face before that all-important first talk.',
        ],
      },
      {
        kind: 'article',
        heading: 'Where Are They Now?',
        paragraphs: [
          'We caught up with three Speechcraft graduates from last spring.',
          'All three have completed at least two Pathways projects, and one has already earned a role as a club officer. Proof that eight weeks can change a trajectory.',
        ],
        note: 'The next Speechcraft cohort starts in October.',
      },
    ],
  },
]

export default function NewsletterPage() {
  return (
    <>
      <PageHero
        eyebrow="Newsletter Corner"
        title="The Smedley Gazette"
        description="Flip through our club newsletter — member spotlights, contest recaps, and hard-won speaking tips, all in one place."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
        <NewsletterShelf newsletters={newsletters} />
      </section>
    </>
  )
}
