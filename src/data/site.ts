/** Central site / SEO / NAP data. Edit before launch. */
export const siteConfig = {
  siteUrl: 'https://geomagic.ca',
  businessName: 'Magic by Geo',
  performerName: 'Geo',
  tagline: 'Close-up magician for Vancouver, Surrey & the Lower Mainland',
  defaultDescription:
    'Hire Geo for elegant close-up magic at corporate events, weddings, and private parties across Greater Vancouver, including Surrey, Vancouver, Burnaby, Richmond, and beyond.',
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
