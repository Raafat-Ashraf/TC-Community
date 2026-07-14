// Curated stock photography (Unsplash) used to give the site a warm,
// spiritual, community feel until real ministry photography is available.
// TODO: replace with real photography from TC / TRH / 100 Leaders once provided.

function unsplash(id: string, params = "w=1920&q=80") {
  return `https://images.unsplash.com/photo-${id}?${params}&fit=crop&auto=format`;
}

export const heroImages = {
  home: {
    src: unsplash("1643682661119-28da0685be2c"),
    alt: "A diverse group of young adults gathered in a circle for discipleship and discussion",
  },
  about: {
    src: unsplash("1722623259595-5ed33e63fddf"),
    alt: "Young adults sitting together on the floor, studying Scripture as a group",
  },
  recovery: {
    src: unsplash("1641232458416-feace752b346"),
    alt: "A warm, comfortable living room, representing the residential recovery home",
  },
  leaders: {
    src: unsplash("1507537362848-9c7e70b7b5c1"),
    alt: "Two men in a focused one-on-one mentoring conversation",
  },
};

export const contentImages = {
  scriptureCross: {
    src: unsplash("1508267881578-893f1ed1c5cc", "w=1200&q=80"),
    alt: "A simple wooden cross mounted on a plain wall",
  },
  scriptureReading: {
    src: unsplash("1663162550932-f67b561e656f", "w=1200&q=80"),
    alt: "Two young women reading and discussing Scripture together outdoors",
  },
};

export const ministryAreaImages = {
  "Spiritual Formation": {
    src: unsplash("1663162550932-f67b561e656f", "w=800&q=75"),
    alt: "Two young women reading and discussing Scripture together outdoors",
  },
  "Emotional and Physical Empowerment": {
    src: unsplash("1630068846062-3ffe78aa5049", "w=800&q=75"),
    alt: "A diverse group stacking their hands together in unity and support",
  },
  "Work and Faith": {
    src: unsplash("1631396326646-c06a935ff3a6", "w=800&q=75"),
    alt: "A craftsman working with care on a piece of furniture in his workshop",
  },
  "Leadership Development": {
    src: unsplash("1542744173-8e7e53415bb0", "w=800&q=75"),
    alt: "A leader teaching a small group seated around a table",
  },
  "Online Ministry": {
    src: unsplash("1758273706126-6dd87b8f0f68", "w=800&q=75"),
    alt: "A young woman connecting with others over a video call on her phone",
  },
} as const;
