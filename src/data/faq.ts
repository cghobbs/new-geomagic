export interface FaqItem {
  question: string;
  answer: string;
}

export const allFaqItems: FaqItem[] = [
  {
    question: 'Do you travel outside Surrey?',
    answer:
      'Yes. I perform across Greater Vancouver, including Vancouver, Burnaby, Richmond, North & West Vancouver, New Westminster, Tri-Cities, Langley, White Rock, and surrounding areas. Include your venue or city in the inquiry form.',
  },
  {
    question: 'How far in advance should I book?',
    answer:
      'Weekends and wedding season dates can book quickly. As soon as you have a date and rough guest count, reach out and I’ll confirm availability and suggested performance timing.',
  },
  {
    question: 'What is close-up / strolling magic?',
    answer:
      'Close-up magic is performed for small groups while guests mingle, often during cocktails or a reception. Effects use cards, coins, and borrowed objects, creating personal “did that just happen?” moments.',
  },
  {
    question: 'Do you perform at corporate events?',
    answer:
      'Yes. Galas, client appreciation nights, holiday parties, and networking receptions are a great fit. Magic is a premium icebreaker that keeps energy high without interrupting programming.',
  },
  {
    question: 'What do you wear?',
    answer:
      'I dress to match your event, typically black-tie adjacent for formal events, or business-smart for corporate settings. Let me know your dress code in the inquiry.',
  },
  {
    question: 'How long do you perform?',
    answer:
      'Most bookings are timed to cocktail-style mingling (often 1 to 2 hours) or a reception window. Larger guest counts may benefit from a longer block, and we’ll map it to your run-of-show.',
  },
  {
    question: 'Do you require a stage or sound system?',
    answer:
      'For close-up / strolling magic, no stage or mic is required. I work in the same space as your guests with minimal setup.',
  },
  {
    question: 'Is pricing available online?',
    answer:
      'Every event is a little different, so I’ll quote based on date, location, timing, and guest count after you submit the inquiry form.',
  },
];

/** First three questions shown on homepage */
export const homeFaqPreview: FaqItem[] = allFaqItems.slice(0, 3);
