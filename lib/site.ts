export const siteConfig = {
  name: 'Smedley Toastmasters Club',
  shortName: 'Smedley Toastmasters',
  tagline: 'Where Confident Voices Are Made',
  email: 'hello@smedleytoastmasters.org',
  phone: '+1 (555) 018-2020',
  meetingDay: 'Every Thursday',
  meetingTime: '6:30 PM – 8:30 PM',
  venue: 'Riverside Community Hall, Room 204',
  address: '128 Orator Avenue, Springfield, IL 62704',
}

export type NavItem = {
  label: string
  href: string
}

export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Our Story', href: '/our-story' },
  { label: 'Leadership', href: '/leadership' },
  { label: 'Hall of Fame', href: '/hall-of-fame' },
  { label: 'Meetings', href: '/meetings' },
  { label: 'Events', href: '/events' },
  { label: 'Newsletter', href: '/newsletter' },
  { label: 'Speechcraft', href: '/speechcraft' },
  { label: 'Contact', href: '/contact' },
]
