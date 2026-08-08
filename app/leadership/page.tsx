import type { Metadata } from 'next'
import Image from 'next/image'
import { Linkedin } from 'lucide-react'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Leadership',
  description:
    'Meet the current Executive Committee of Smedley Toastmasters Club — the dedicated volunteers who keep our supportive community thriving.',
}

const committee = [
  {
    name: 'Priya Natarajan',
    role: 'President',
    photo: '/images/member-1.png',
    bio: 'A DTM and product manager, Priya leads the club with warmth and vision, championing an inclusive space where every member can flourish.',
    linkedin: '#',
  },
  {
    name: 'Marcus Bell',
    role: 'Vice President Education',
    photo: '/images/member-2.png',
    bio: 'Marcus designs the meeting programs and mentors members through their Pathways journeys with patience and genuine care.',
    linkedin: '#',
  },
  {
    name: 'Mei Lin Chen',
    role: 'Vice President Membership',
    photo: '/images/member-3.png',
    bio: 'The first friendly face guests meet, Mei Lin makes sure everyone feels welcome from the moment they walk in.',
    linkedin: '#',
  },
  {
    name: 'Robert Harding',
    role: 'Vice President Public Relations',
    photo: '/images/member-4.png',
    bio: 'A retired journalist, Robert tells the club’s story across the community and keeps our newsletter humming.',
    linkedin: '#',
  },
  {
    name: 'Sofia Alvarez',
    role: 'Secretary',
    photo: '/images/member-5.png',
    bio: 'Sofia keeps the club organised and informed, capturing every meeting and milestone with meticulous care.',
    linkedin: '#',
  },
  {
    name: 'Karim Haddad',
    role: 'Treasurer',
    photo: '/images/member-6.png',
    bio: 'Karim manages club finances transparently, ensuring dues and resources are put to great use for members.',
    linkedin: '#',
  },
  {
    name: 'Grace Okafor',
    role: 'Sergeant at Arms',
    photo: '/images/member-7.png',
    bio: 'Grace sets up every meeting and creates the welcoming room that makes Smedley feel like home.',
    linkedin: '#',
  },
  {
    name: 'Helen Whitmore',
    role: 'Immediate Past President',
    photo: '/images/member-8.png',
    bio: 'Helen guided the club to Distinguished status and now mentors the current committee with steady wisdom.',
    linkedin: '#',
  },
]

export default function LeadershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Leadership"
        title="Meet our Executive Committee"
        description="Smedley is run entirely by volunteer members who give their time so others can grow. Say hello to the 2026 committee."
      />

      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {committee.map((m) => (
            <article
              key={m.name}
              className="group flex flex-col overflow-hidden rounded-[1.75rem] bg-card shadow-[var(--shadow-soft)] ring-1 ring-black/5 transition-transform hover:-translate-y-1"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={m.photo || '/placeholder.svg'}
                  alt={`Portrait of ${m.name}, ${m.role}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute bottom-3 left-3 rounded-full bg-card/90 px-3 py-1 text-xs font-semibold text-primary shadow-sm backdrop-blur">
                  {m.role}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg font-semibold text-foreground">{m.name}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
                <a
                  href={m.linkedin}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue transition-colors hover:text-primary"
                  aria-label={`${m.name} on LinkedIn`}
                >
                  <Linkedin className="size-4" /> Connect
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </>
  )
}
