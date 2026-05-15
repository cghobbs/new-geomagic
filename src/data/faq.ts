export interface FaqItem {
  question: string;
  answer: string;
}

export const allFaqItems: FaqItem[] = [
  {
    question: "Do you travel outside Surrey?",
    answer:
      "Yes. I perform across Greater Vancouver, including Vancouver, Burnaby, Richmond, North & West Vancouver, New Westminster, Tri-Cities, Langley, White Rock, and surrounding areas. Include your venue or city in the inquiry form.",
  },
  {
    question: "How far in advance should I book?",
    answer:
      "Weekends and wedding season dates can book quickly. As soon as you have a date and rough guest count, reach out and I'll confirm availability and suggested performance timing.",
  },
  {
    question: "What is close-up / strolling magic?",
    answer:
      "Close-up, strolling magic is an interactive experience where the magic happens right in the hands of your guests. As I move from group to group, I perform magic with cards, coins, and everyday objects, creating personal moments of astonishment. It is a great way to break the ice, spark conversations, and leave a lasting impression.",
  },
  {
    question: "Do you perform at corporate events?",
    answer:
      "Yes. I tailor performances to your event and brand, from team-building workshops to awards ceremonies, with intimate close-up magic or higher-energy routines. Galas, client appreciation nights, holiday parties, and networking receptions are a strong fit, including fundraising galas where magic can support your program and keep guests engaged.",
  },
  {
    question: "What do you wear?",
    answer:
      "I dress to match your event, typically black-tie adjacent for formal events, or business-smart for corporate settings. Let me know your dress code in the inquiry.",
  },
  {
    question: "How long do you perform?",
    answer:
      "Most bookings are timed to cocktail-style mingling (often 1 to 2 hours) or a reception window. Larger guest counts may benefit from a longer block, and we'll map it to your run-of-show.",
  },
  {
    question: "Do you require a stage or sound system?",
    answer:
      "For close-up / strolling magic, no stage or mic is required. I work in the same space as your guests with minimal setup.",
  },
  {
    question: "Is pricing available online?",
    answer:
      "Every event is a little different, so I'll quote based on date, location, timing, and guest count after you submit the inquiry form.",
  },
  {
    question: "What happens if you are ill or cannot perform?",
    answer:
      "In the unlikely event I cannot make it, I will contact you as early as possible and do everything I can to find a suitable replacement. It has never happened, but it is a fair question to ask any performer you hire.",
  },
  {
    question: "Is the magic suitable for all ages?",
    answer:
      "Yes. Close-up magic works naturally across age groups. I read the room and adjust for whoever I am performing for, whether that is a grandparent, a colleague, or a teenager who thinks they have seen it all.",
  },
  {
    question: "What is the deposit and payment structure?",
    answer:
      "A deposit is required to secure your date, with the balance due before the event. Full details are outlined in the booking agreement.",
  },
  {
    question: "Can you customise the performance for our brand or event theme?",
    answer:
      "Yes. I can tailor routines to reference your theme, occasion, or any details that matter to you. Let me know what you have in mind in the inquiry form and I will let you know what is possible.",
  },
  {
    question: "Do you perform at children's parties?",
    answer:
      "My focus is adult events: weddings, corporate receptions, and private parties. For events where children are part of a mixed adult crowd, the magic works well for all ages. For dedicated kids' parties, I would recommend finding a specialist.",
  },
];

/** First three questions shown on homepage */
export const homeFaqPreview: FaqItem[] = allFaqItems.slice(0, 3);
