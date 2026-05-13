/** Central site / SEO / NAP data. Edit before launch. */
export const siteConfig = {
  siteUrl: 'https://www.geomagic.ca',
  businessName: 'Magic by Geo',
  performerName: 'Geo',
  tagline: 'Experience the art of astonishment, close-up magic for Vancouver, Surrey, and the Lower Mainland',
  defaultDescription:
    'Hello, I\'m Geo, a close-up magician. Elevate your events with mind-bending illusions and unforgettable moments of wonder. Corporate events, private parties, and special celebrations across Greater Vancouver, Surrey, Vancouver, Burnaby, Richmond, and beyond.',
  email: 'hello@geomagic.ca',
  phone: '',
  address: {
    addressLocality: 'Surrey',
    addressRegion: 'BC',
    addressCountry: 'CA',
  },
  areaServed: [
    'Greater Vancouver',
    'Vancouver',
    'Surrey',
    'Burnaby',
    'Richmond',
    'North Vancouver',
    'West Vancouver',
    'Coquitlam',
    'Langley',
    'New Westminster',
    'White Rock',
  ],
  social: {
    // Add when ready; used in Person sameAs
    instagram: '',
    youtube: '',
  },
} as const;
