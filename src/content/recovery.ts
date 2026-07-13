import { StatItem, CardItem, FAQItem } from "@/lib/types";

export const recoveryMeta = {
  name: "The Recovery House (TRH)",
  tagline: "A ministry of The Community",
};

export const recoveryHero = {
  headline: "Restoring Lives. Renewing Hope.",
  subhead:
    "A faith-based Christian recovery center for men and women in Egypt, who want real lasting freedom from addiction.",
  quote:
    "Come to me, all who are weary and burdened, and I will give you rest.",
  body: "At our recovery homes, there is a path to real freedom. We've witnessed firsthand the transformative power of grace to break the cycle of addiction and renew lives. For over 10 years, our faith-based residential program has given men and women the tools—and the hope—they need to overcome dependency and step into a new beginning.",
  primaryCta: { label: "Support a Life Today", href: "/give" },
  secondaryCta: { label: "Our Story", href: "/departments/recovery/about" },
};

export const completeApproach = [
  {
    number: "1",
    title: "Body",
    description:
      "We care for the body by providing a safe, structured environment where individuals can: begin rebuilding healthy routines, physical wellness, and stability.",
    href: "/departments/recovery/program",
  },
  {
    number: "2",
    title: "Soul",
    description:
      "We care for the soul through counseling, community, mentorship, and compassionate support that helps restore: identity, relationships, and emotional health.",
    href: "/departments/recovery/program",
  },
  {
    number: "3",
    title: "Spirit",
    description:
      "We nurture the spirit through a Christ-centered foundation that points each person toward: Faith, Hope, A renewed purpose in God.",
    href: "/departments/recovery/program",
  },
];

export const recoveryStats: StatItem[] = [
  { value: 2, label: "Recovery facilities" },
  { value: 50, label: "Concurrent resident beds" },
  { value: 500, suffix: "+", label: "Men and women impacted directly by TRH" },
  { value: 10, label: "Number of years serving" },
];

export const nextSteps: CardItem[] = [
  {
    title: "I'm new to TRH",
    description:
      "I'd like to learn more about TRH and what you offer to those struggling with addictions.",
    href: "/departments/recovery/about",
    ctaLabel: "Learn More",
  },
  {
    title: "I want to help",
    description: "I'd like to support the work that TRH is doing.",
    href: "/give",
    ctaLabel: "Show Your Support",
  },
  {
    title: "Read Stories of Hope",
    description:
      "I'd like to learn more about the stories, milestones, and the lasting impact of TRH.",
    href: "/departments/recovery/recovery-in-action",
    ctaLabel: "See Recovery in Action",
  },
  {
    title: "I want to Partner",
    description:
      "I want to learn about future expansion plans, outreach opportunities, and aftercare initiatives.",
    href: "/contact",
    ctaLabel: "Partner in the Journey",
  },
];

export const joinCommunityBand = {
  heading: "Join Our Community",
  body: "TODO: Real service/meeting times to be provided by TRH staff.",
};

// ---------- Program Page ----------

export const programIntro = {
  heading: "Our Program",
  body: "The Recovery House is a faith-based residential recovery program designed to help men and women overcome addiction and experience lasting transformation. Over the course of 8–10 months, residents are immersed in a structured, supportive, and Christ-centered environment focused on healing the body, soul, and spirit.",
};

export const keyElements = [
  {
    title: "Biblical Foundation",
    description:
      "At the center of our program is faith in Jesus Christ and the truth of God's Word. We believe lasting freedom begins with spiritual transformation and a restored relationship with God. Through Bible study, prayer, worship, discipleship, and Christ-centered mentorship, residents are encouraged to grow spiritually and discover a renewed sense of identity, purpose, and hope. Our biblical foundation provides guidance, accountability, and encouragement for individuals seeking a new way of life rooted in faith and truth.",
  },
  {
    title: "12-Step Integration",
    description:
      "Our program incorporates the principles of the 12-step recovery model alongside biblical teaching and discipleship. This approach encourages honesty, accountability, personal responsibility, and healing from the patterns and struggles connected to addiction. By combining practical recovery principles with spiritual growth, residents are equipped with tools that support long-term recovery and healthy decision-making beyond the program.",
  },
  {
    title: "Disciplined & Balanced Living",
    description:
      "Recovery requires structure, consistency, and personal growth. Residents participate in a healthy daily routine designed to build discipline, responsibility, time management, and stability. Balanced living includes developing healthy habits, maintaining accountability, participating in productive activities, and learning how to live with purpose and direction. Through structured residential living, individuals begin replacing destructive patterns with healthy and life-giving routines.",
  },
  {
    title: "Physical Activity & Wellness",
    description:
      "Physical activity is an important part of emotional and physical healing. Exercise and recreational activities help residents reduce stress, improve mental focus, rebuild confidence, and strengthen overall health. We encourage an active lifestyle that promotes wellness, discipline, teamwork, and personal growth while helping individuals establish healthy outlets and routines for long-term recovery.",
  },
];

export interface ProgramPhase {
  phase: number;
  title: string;
  description: string;
  keyTopics?: string[];
  recoveryTools?: string[];
  psychologicalTraps?: string[];
  closing: string;
}

export const programPhases: ProgramPhase[] = [
  {
    phase: 1,
    title: "Understanding Addiction & Personal Awareness",
    description:
      "The first phase focuses on helping residents understand the nature of addiction and begin developing personal honesty and self-awareness. Participants are encouraged to reflect on their life experiences, struggles, and the patterns that contributed to addiction.",
    keyTopics: ["Understanding Addiction", "Why Am I Here?", "My Life Story"],
    closing:
      "This phase lays the foundation for recovery by helping individuals acknowledge the reality of addiction and begin the journey toward healing and transformation.",
  },
  {
    phase: 2,
    title: "Foundations of Recovery",
    description:
      "In this phase, residents are introduced to the core principles of recovery and relapse prevention. They begin learning practical recovery tools while identifying unhealthy thought patterns and emotional traps that can hinder long-term growth.",
    keyTopics: [
      "Understanding Recovery",
      "Understanding Relapse",
      "Recovery Tool 1: Breaking Denial",
      "Recovery Tool 2: Self-Awareness",
    ],
    psychologicalTraps: [
      "Separating Actions from Identity",
      "Shame & Guilt",
      "Lack of Discipline & Accountability",
    ],
    closing:
      "This phase helps residents build honesty, responsibility, and a deeper awareness of their behaviors and emotional patterns.",
  },
  {
    phase: 3,
    title: "Emotional Healing & Personal Growth",
    description:
      "Phase three focuses on emotional health, behavioral transformation, and deeper self-management skills. Residents learn practical tools that help them manage thoughts, emotions, relationships, and personal struggles in healthier ways.",
    recoveryTools: [
      "Physical & Behavioral Self-Management",
      "Renewing the Mind (Thoughts & Beliefs)",
      "Emotional Management",
      "Healing from Hurt & Abuse",
    ],
    psychologicalTraps: [
      "Risky & Destructive Behaviors",
      "Secrets & Hidden Struggles",
      "Failure to Learn from Mistakes",
      "Isolation & Avoiding Relationships",
    ],
    closing:
      "This phase encourages emotional healing, personal responsibility, and the development of healthier coping strategies.",
  },
  {
    phase: 4,
    title: "Relationships, Accountability & Balanced Living",
    description:
      "In this phase, residents strengthen their understanding of healthy relationships, accountability, humility, and balanced living. The focus shifts toward sustainable growth, relational healing, and long-term character development.",
    recoveryTools: ["Asking for Help & Building Healthy Relationships"],
    psychologicalTraps: [
      "Carelessness & Poor Decisions",
      "Pride",
      "Loss of Balance",
      "Bitterness & Unforgiveness",
      "Dishonesty",
      "Complaining & Negativity",
      "Superficial Spirituality",
    ],
    closing:
      "This phase equips residents to develop emotional maturity, healthy relationships, integrity, and a balanced lifestyle rooted in accountability and growth.",
  },
  {
    phase: 5,
    title: "Spiritual Growth & Long-Term Recovery",
    description:
      "This phase emphasizes spiritual maturity, conflict resolution, service to others, and maintaining long-term recovery. Residents are encouraged to strengthen their relationship with God while learning how to live with purpose, responsibility, and ongoing personal growth.",
    recoveryTools: [
      "Spirituality, Recovery & the Role of God in Healing",
      "Conflict Resolution & Daily Personal Inventory",
      "Making Amends & Helping Others",
    ],
    closing:
      "This phase helps residents transition into a lifestyle of continued healing, healthy relationships, spiritual growth, and meaningful contribution to others and the community.",
  },
  {
    phase: 6,
    title: "Relapse Prevention & Helping Others",
    description:
      "The final phase focuses on maintaining long-term recovery, strengthening relapse prevention strategies, and preparing residents to support and encourage others on their recovery journey.",
    keyTopics: [
      "Relapse Prevention & Long-Term Recovery",
      "Maintaining Healthy Boundaries & Accountability",
      "Recognizing Triggers & High-Risk Patterns",
      "Living with Purpose & Continued Growth",
      "Supporting & Mentoring Others in Recovery",
    ],
    closing:
      "This phase emphasizes that recovery is not only about personal transformation, but also about becoming a source of hope, encouragement, and support for others seeking freedom from addiction. Residents are encouraged to use their experiences, growth, and testimony to positively impact the lives of others and continue building a healthy, purpose-driven future.",
  },
];

export const programIncludes = [
  {
    title: "Structured Residential Living",
    description:
      "Residents live in a safe and supportive environment designed to encourage accountability, personal growth, discipline, and healthy routines throughout the recovery journey.",
  },
  {
    title: "Biblical Discipleship & Mentorship",
    description:
      "Spiritual development is a core part of our program. Residents receive guidance through biblical teaching, discipleship, mentorship, and Christ-centered community.",
  },
  {
    title: "Counseling & Emotional Support",
    description:
      "Our program provides support for emotional healing and personal growth through biblical counseling, mentorship, and healthy peer relationships.",
  },
  {
    title: "Life Skills & Personal Development",
    description:
      "Residents are equipped with practical tools for long-term success, including responsibility, communication skills, work ethic, goal setting, and healthy lifestyle habits.",
  },
  {
    title: "Community & Accountability",
    description:
      "Recovery happens in the community. Residents are surrounded by staff, mentors, and peers who provide encouragement, accountability, and support every step of the way.",
  },
  {
    title: "Aftercare & Continued Support",
    description:
      "Our commitment does not end after graduation. We continue supporting residents as they transition into independent living, employment opportunities, restored relationships, and continued spiritual growth.",
  },
];

// ---------- About Page ----------

export const aboutOpeningScripture = {
  text: "He lifted me out of the pit of despair, out of the mud and the mire. He set my feet on solid ground and steadied me as I walked along.",
  reference: "Psalm 40:2",
};

export const aboutIntro = [
  "This verse captures the heart of The Recovery House and the transformation we have witnessed through God's grace. We have seen men and women walk through our doors carrying the weight of addiction, shame, fear, broken relationships, and hopelessness—and we have witnessed God begin the work of restoration. Through faith, community, discipleship, and the healing power of Jesus Christ, lives that seemed beyond repair have been renewed with hope and purpose.",
];

export const addictionContext = [
  "Addiction is one of the most overlooked challenges facing our communities today. Across Egypt, millions of individuals and families are affected by substance abuse and destructive patterns that often remain hidden behind silence and shame. While the need continues to grow, many people struggle in isolation, afraid to seek help or unsure where they can find a safe place for healing and truth.",
  "Addiction has become an unspoken reality—the elephant in the room. It impacts individuals, families, and communities, yet it is often hidden because of fear, stigma, and shame. Behind every addiction is a person with a story, a family carrying pain, and a life that still holds God-given value and purpose.",
];

export const recoveryMission = [
  "The Recovery House exists to bring hope into that darkness. We believe people do not need to be defined by their past, their struggles, or their failures. We believe they can experience freedom, healing, and a restored identity through Christ. Our mission is not simply to help individuals stop destructive behaviors, but to walk alongside them as they discover who they were created to be.",
];

export const foundingHistory = [
  "The Recovery House began in 2016 with the opening of our men's residential recovery home. What started as a small step of faith quickly became a place where God began restoring lives one story at a time. As word spread and lives were transformed, it became clear that the need extended far beyond what a single home could address.",
  "As God continued to open doors and transform lives, the ministry expanded in 2020 with the opening of our women's residential recovery home—extending the same faith-based, structured path to freedom to women facing addiction and its devastating effects on their lives and families.",
  "The Recovery House was never meant to be just another recovery program. From the beginning, it was built on the conviction that lasting change comes through Jesus Christ, and that a structured, disciplined, Christ-centered community could offer residents the tools, support, and spiritual foundation they need for genuine transformation.",
  "Today, our 8–10 month residential program continues to walk with men and women through every phase of the recovery journey—from the first days of acknowledging addiction, through emotional healing and spiritual growth, to graduation and ongoing aftercare support.",
];

export const transformationReflection = [
  "Every story that comes out of The Recovery House is different, but they share a common thread: lives once defined by addiction, shame, and hopelessness are being redefined by grace, purpose, and a relationship with Jesus Christ. We have watched residents rebuild relationships with family members who had given up hope. We have watched them re-enter the workforce, walk in freedom, and become mentors to others still early in their own journeys.",
  "We believe no person is too far gone, no story is too broken, and no life is beyond the reach of God's redeeming love.",
];

export const recoveryCoreValues = [
  {
    title: "Christ-Centered Transformation",
    description:
      "We believe true and lasting recovery begins with Jesus Christ. Our foundation is rooted in biblical truth, discipleship, prayer, worship, and spiritual growth that leads to genuine life transformation.",
  },
  {
    title: "Recovery With Purpose",
    description:
      "We combine Christ-centered principles with proven 12-step recovery tools to help individuals develop accountability, self-awareness, emotional healing, and practical life skills for long-term recovery.",
  },
  {
    title: "Grace, Dignity & Compassion",
    description:
      "Every person who enters our doors matters. We are committed to creating a safe and supportive environment where individuals are treated with compassion, dignity, respect, and unconditional love regardless of their past.",
  },
  {
    title: "Healing the Whole Person",
    description:
      "Addiction affects every part of life. That is why we focus on complete restoration—body, soul, and spirit—through emotional healing, spiritual growth, disciplined living, healthy relationships, nutrition, physical wellness, and personal development.",
  },
  {
    title: "Integrity & Stewardship",
    description:
      "We are committed to operating this ministry with honesty, wisdom, accountability, and financial integrity. We honor the trust of our ministry partners and strive to steward every resource faithfully for maximum impact and transformation.",
  },
  {
    title: "Lasting Impact & Restoration",
    description:
      "Our goal is not temporary change, but lifelong transformation. We are passionate about helping individuals rebuild their lives, restore relationships, reconnect with purpose, and become healthy, productive members of their families, churches, and communities.",
  },
];

// ---------- Recovery in Action ----------

export const confidentialityNotice =
  "To protect the privacy and dignity of the individuals featured in these testimonies, names and photos have been changed. Some personal details may also be adjusted while preserving the heart of each story and the reality of the recovery journey. Each testimony represents a real journey of struggle, transformation, and hope. We share these stories with permission and with great respect for the individuals who have allowed us to witness the work God is doing in their lives.";

export const recoveryFAQs: FAQItem[] = [
  {
    question: "How long is the residential program?",
    answer:
      "Our residential recovery program runs 8–10 months, walking residents through six structured phases addressing addiction, emotional healing, relationships, and spiritual growth.",
  },
  {
    question: "Is The Recovery House faith-based?",
    answer:
      "Yes. Our program is built on a Christ-centered biblical foundation, integrated with proven 12-step recovery principles.",
  },
  {
    question: "Do you serve both men and women?",
    answer:
      "Yes. We operate two residential facilities — a men's home opened in 2016 and a women's home opened in 2020.",
  },
  {
    question: "How can I apply for residency or refer someone?",
    answer:
      "Please reach out through our Contact page or use the \"Apply for Residency\" button in the navigation, and our team will follow up with next steps.",
  },
  {
    question: "How can I support The Recovery House?",
    answer:
      "You can give financially, partner with us on future expansion and outreach initiatives, or share our stories of hope. Visit the Give or Contact pages to get started.",
  },
];
